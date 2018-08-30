class StripeChargesServices
  DEFAULT_CURRENCY = 'usd'.freeze

  def initialize(params)
    @stripe_email = params.dig(:user, :email)
    @stripe_token = params[:stripe_token]
    @order = Order.find(params[:order_id])
  end

  def call
    create_charge(find_customer)
  end

  private

  attr_accessor :user, :stripe_email, :stripe_token, :order

  def find_customer
    if user.stripe_token
      retrieve_customer(user.stripe_token)
    else
      create_customer
    end
  end

  def retrieve_customer(stripe_token)
    Stripe::Customer.retrieve(stripe_token)
  end

  def create_customer
    customer = Stripe::Customer.create(
      email: stripe_email,
      source: stripe_token
    )
    user.update(stripe_token: customer.id)
    customer
  end

  def create_charge(customer)
    Stripe::Charge.create(
      customer: customer.id,
      amount: order.amount,
      description: customer.email,
      currency: DEFAULT_CURRENCY
    )
  end
end