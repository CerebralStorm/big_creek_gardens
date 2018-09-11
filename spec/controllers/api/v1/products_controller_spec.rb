require 'rails_helper'

RSpec.describe Api::V1::ProductsController, type: :controller do
  render_views
  let(:valid_session) { {} }
  let!(:product) { FactoryBot.create(:product) }

  before do
    request.env['CONTENT_TYPE'] = 'application/json'
  end

  describe 'GET #index' do
    let!(:result) do
      {
        products: [
          {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image_url: nil
          }
        ]
      }
    end

    it 'returns products json' do
      get :index, params: {}, format: :json
      expect(response.body).to eq result.to_json
    end
  end
end
