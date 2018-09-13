require 'rails_helper'

RSpec.describe Api::V1::ProductsController, type: :controller do
  render_views
  before do
    request.env['CONTENT_TYPE'] = 'application/json'
    request.env['HTTP_ACCEPT'] = 'application/json'
  end

  def product_json(product)
    {
      'id' => product.id,
      'name' => product.name,
      'description' => product.description,
      'price' => product.price,
      'image_url' => product.image.url
    }
  end

  describe 'GET #index' do
    let!(:product) { FactoryBot.create(:product) }
    let(:expected_response) do
      {
        'products' => [
          product_json(product)
        ]
      }
    end

    it 'returns the products for the current_user' do
      post :index, params: {}
      parsed_response = JSON.parse(response.body)
      expect(parsed_response).to eq JSON.parse(expected_response.to_json)
    end
  end
end
