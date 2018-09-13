require 'rails_helper'

RSpec.describe Api::V1::ChargesController, type: :controller do
  let(:stripe_helper) { StripeMock.create_test_helper }
  before { StripeMock.start }
  after { StripeMock.stop }

  let(:product) { FactoryBot.create(:product) }

  let(:card_token) {
    StripeMock.generate_card_token(last4: "9191", exp_year: 1984)
  }

  let(:params) {
    {
      "stripe_token"=> card_token,
      "order_line_items_attributes"=>[
        {"product_id"=>product.id, "quantity"=>1}
      ],
      "user"=> {
        "email"=>Faker::Internet.email,
        "name"=>"Test User",
        "phone"=>"8014446666",
        "address"=>"123 S LollyLand St",
        "city"=>"Salt Lake City",
        "state"=>"UT",
        "zip"=>"84109"
      }
    }.with_indifferent_access
  }
  describe 'POST #create' do
    context 'with a guest user' do
      it 'creates a user, order and charge' do
        post :create, params: params
        parsed_response = JSON.parse(response.body)
        charge = Charge.last
        user = User.last
        expect(parsed_response['charge']['id']).to eq charge.id
        expect(charge.order).to_not be nil
        expect(charge.order.order_line_items.count).to be 1
        expect(charge.order.order_line_items.first.product).to eq product
        expect(charge.user).to eq user
        expect(user.email).to eq params[:user][:email]
        expect(user.name).to eq params[:user][:name]
        expect(user.phone).to eq params[:user][:phone]
        expect(user.address).to eq params[:user][:address]
        expect(user.city).to eq params[:user][:city]
        expect(user.state).to eq params[:user][:state]
        expect(user.zip).to eq params[:user][:zip]
        expect(user.stripe_token).to_not eq nil
      end
    end

    context 'with an existing user' do
      let(:user) { FactoryBot.create(:user) }

      before(:each) do
        sign_in(user)
      end

      it 'creates order and charge and assigns them to the current user' do
        post :create, params: params
        parsed_response = JSON.parse(response.body)
        charge = Charge.last
        user.reload
        expect(parsed_response['charge']['id']).to eq charge.id
        expect(charge.order).to_not be nil
        expect(charge.order.order_line_items.count).to be 1
        expect(charge.order.order_line_items.first.product).to eq product
        expect(charge.user).to eq user
        expect(user.name).to eq params[:user][:name]
        expect(user.phone).to eq params[:user][:phone]
        expect(user.address).to eq params[:user][:address]
        expect(user.city).to eq params[:user][:city]
        expect(user.state).to eq params[:user][:state]
        expect(user.zip).to eq params[:user][:zip]
        expect(user.stripe_token).to_not eq nil
      end
    end
  end


end
