require "stripe"
class StripeChargesServices
  DEFAULT_CURRENCY = 'usd'.freeze

  def initialize(params, user = nil)
    @params = params
    @stripe_email = params.dig(:user, :email)
    @stripe_token = params[:stripe_token]
    @user ||= User.where(email: stripe_email).first_or_initialize
    @user.save(validate: false) unless @user.persisted?
    if params[:order_id].present?
      @order = Order.find(params[:order_id])
    else
      @order = create_order
    end
    Stripe.api_key ||= ENV['STRIPE_SECRET_KEY']
  end

  def call
    create_charge(find_customer)
  end

  private

  attr_accessor :user, :stripe_email, :stripe_token, :order, :params

  def create_order
    Order.create(
      user_id: user.id,
      order_line_items_attributes: params[:order_line_items_attributes]
    )
  end

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
      amount: order.total_in_cents,
      description: customer.email,
      currency: DEFAULT_CURRENCY
    )
    create_charge_record(customer)
  end

  def create_charge_record(customer)
    Charge.create(
      user_id: user.id,
      order_id: order.id,
      stripe_customer: customer.id,
      amount: order.total,
      description: customer.email,
      currency: DEFAULT_CURRENCY
    )
  end
end
