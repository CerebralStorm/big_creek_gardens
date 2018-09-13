require 'rails_helper'

RSpec.describe Api::V1::ChargesController, type: :controller do
  let(:stripe_helper) { StripeMock.create_test_helper }

  let(:product) { FactoryBot.create(:product) }

  let(:card_token) do
    StripeMock.generate_card_token(last4: '9191', exp_year: 1984)
  end

  let(:email) { Faker::Internet.email }

  let(:params) do
    {
      'stripe_token' => card_token,
      'order_line_items_attributes' => [
        { 'product_id' => product.id, 'quantity' => 1 }
      ],
      'user' => {
        'email' => email,
        'name' => 'Test User',
        'phone' => '8014446666',
        'address' => '123 S LollyLand St',
        'city' => 'Salt Lake City',
        'state' => 'UT',
        'zip' => '84109'
      }
    }.with_indifferent_access
  end

  before { StripeMock.start }

  after { StripeMock.stop }

  describe 'POST #create' do
    let(:charge) { Charge.last }
    let(:order) { charge.order }

    context 'with a guest user' do
      let(:user) { User.last }
      let(:guest_user_expected_response) do
        {
          'charge' => {
            'id' => charge.id,
            'user_id' => user.id,
            'order_id' => order.id,
            'amount' => order.total,
            'stripe_customer' => 'test_cus_3',
            'currency' => 'usd',
            'description' => email,
            'created_at' => charge.created_at,
            'updated_at' => charge.updated_at
          }
        }
      end

      it 'creates a user, order and charge' do
        post :create, params: params
        expect(response.body).to eq guest_user_expected_response.to_json
      end
    end

    context 'with an existing user' do
      let!(:user) { FactoryBot.create(:user) }
      let(:existing_user_expected_response) do
        {
          'charge' => {
            'id' => charge.id,
            'user_id' => user.id,
            'order_id' => order.id,
            'amount' => order.total,
            'stripe_customer' => 'test_cus_3',
            'currency' => 'usd',
            'description' => email,
            'created_at' => charge.created_at,
            'updated_at' => charge.updated_at
          }
        }
      end

      before do
        sign_in(user)
      end

      it 'creates order and charge and assigns them to the current user' do
        post :create, params: params
        expect(response.body).to eq existing_user_expected_response.to_json
      end
    end
  end
end
