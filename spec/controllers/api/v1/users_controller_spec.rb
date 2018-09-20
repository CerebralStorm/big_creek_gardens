require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  render_views
  before do
    request.env['CONTENT_TYPE'] = 'application/json'
    request.env['HTTP_ACCEPT'] = 'application/json'
  end

  let!(:user) do
    FactoryBot.create(
      :user,
      email: 'old@email.com',
      name: 'Old',
      phone: '8014446666',
      address: '123 Old St.',
      city: 'Old City',
      state: 'Old State',
      zip: '88888'
    )
  end
  let(:params) do
    {
      'user' => {
        'email' => 'new@email.com',
        'name' => 'New Name',
        'phone' => '4352224444',
        'address' => '123 New St.',
        'city' => 'New City',
        'state' => 'New State',
        'zip' => 'New Zip'
      }
    }.with_indifferent_access
  end

  def user_json(user)
    {
      'id' => user.id,
      'email' => user.email,
      'name' => user.name,
      'phone' => user.phone,
      'address' => user.address,
      'city' => user.city,
      'state' => user.state,
      'zip' => user.zip,
      'roles' => user.roles,
      'stripe_token' => user.stripe_token,
      'created_at' => user.created_at,
      'updated_at' => user.updated_at
    }
  end

  context 'when user is not signed in' do
    it 'returns json error about needing to sign in' do
      put :update, params: { id: user.id }.merge(params)
      parsed_response = JSON.parse(response.body)
      result = {}
      result['error'] = 'You need to sign in or sign up before continuing.'
      expect(parsed_response).to eq result
    end
  end

  describe 'PUT #update' do
    let(:expected_response) do
      user.reload
      {
        'user' => {
          'roles' => [],
          'id' => user.id,
          'phone' => '4352224444',
          'name' => 'New Name',
          'email' => 'new@email.com',
          'address' => '123 New St.',
          'city' => 'New City',
          'state' => 'New State',
          'zip' => 'New Zip',
          'created_at' => user.created_at,
          'updated_at' => user.updated_at,
          'stripe_token' => nil
        }
      }
    end

    before do
      sign_in(user)
    end

    it 'updates the users attributes' do
      put :update, params: { id: user.id }.merge(params)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response).to eq JSON.parse(expected_response.to_json)
    end

    context 'with invalid attributes' do
      let(:expected_response) do
        {
          'error' => {
            'email' => ["can't be blank"]
          }
        }
      end

      it 'does not update the user and return an error' do
        params[:user][:email] = nil
        put :update, params: { id: user.id }.merge(params)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response).to eq JSON.parse(expected_response.to_json)
      end
    end
  end
end
