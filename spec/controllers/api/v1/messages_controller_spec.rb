require 'rails_helper'

RSpec.describe Api::V1::MessagesController, type: :controller do
  let(:params) {
    {
      "message"=> {
        "email"=>Faker::Internet.email,
        "name"=>"Test User",
        "message"=>"this is a test message"
      }
    }.with_indifferent_access
  }
  describe 'POST #create' do
    it 'creates a message' do
      post :create, params: params
      parsed_response = JSON.parse(response.body)
      message = Message.last
      expect(parsed_response['message']['id']).to eq message.id
      expect(parsed_response['message']['email']).to eq message.email
      expect(parsed_response['message']['name']).to eq message.name
    end
  end
end
