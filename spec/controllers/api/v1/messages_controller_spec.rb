require 'rails_helper'

RSpec.describe Api::V1::MessagesController, type: :controller do
  let(:email) { Faker::Internet.email }
  let(:params) do
    {
      'message' => {
        'email' => email,
        'name' => 'Test User',
        'message' => 'this is a test message'
      }
    }.with_indifferent_access
  end
  let(:message) { Message.last }
  let(:expected_response) do
    {
      'message' => {
        'id' => message.id,
        'name' => 'Test User',
        'email' => email,
        'message' => 'this is a test message',
        'created_at' => message.created_at,
        'updated_at' => message.updated_at
      }
    }
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a message' do
        post :create, params: params
        expect(response.body).to eq expected_response.to_json
      end
    end

    context 'with invalid params' do
      let(:expected_response) do
        {
          'error' => {
            'email' => ["can't be blank"]
          }
        }
      end

      it 'fails to create a message' do
        params[:message][:email] = nil
        post :create, params: params
        expect(JSON.parse(response.body)).to eq(expected_response)
      end
    end
  end
end
