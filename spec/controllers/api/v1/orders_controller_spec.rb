require 'rails_helper'

RSpec.describe Api::V1::OrdersController, type: :controller do
  render_views
  before do
    request.env['CONTENT_TYPE'] = 'application/json'
    request.env['HTTP_ACCEPT'] = 'application/json'
  end

  # rubocop:disable Metrics/AbcSize
  def order_json(order)
    user = order.user
    {
      'id' => order.id,
      'total' => order.total,
      'user' => {
        'id' => user.id,
        'email' => user.email,
        'created_at' => user.created_at,
        'updated_at' => user.updated_at,
        'name' => user.name,
        'phone' => user.phone,
        'address' => user.address,
        'city' => user.city,
        'state' => user.state,
        'zip' => user.zip,
        'stripe_token' => user.stripe_token,
        'roles' => user.roles
      },
      'createdAt' => order.created_at,
      'orderLineItems' => order.order_line_items
    }
  end
  # rubocop:enable Metrics/AbcSize

  describe 'GET #index' do
    let(:user) { FactoryBot.create(:user) }
    let!(:order) { FactoryBot.create(:order, user: user) }
    let(:expected_response) do
      {
        'orders' => [
          order_json(order)
        ]
      }
    end

    before do
      sign_in(user)
    end

    it 'returns the orders for the current_user' do
      post :index, params: {}
      parsed_response = JSON.parse(response.body)
      expect(parsed_response).to eq JSON.parse(expected_response.to_json)
    end
  end

  describe 'GET #show' do
    let(:user) { FactoryBot.create(:user) }
    let!(:order) { FactoryBot.create(:order, user: user) }
    let(:expected_response) { order_json(order) }

    it 'gets the current order' do
      get :show, params: { id: order.id }
      parsed_response = JSON.parse(response.body)
      expect(parsed_response).to eq JSON.parse(expected_response.to_json)
    end
  end
end
