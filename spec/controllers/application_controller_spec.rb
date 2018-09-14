require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do
  describe '#js_env' do
    let(:user) { FactoryBot.create(:user) }
    let(:expected_js_env) do
      {
        params: {},
        csrf_token: 'auth_token',
        current_user: user,
        stripe_key: ENV['STRIPE_PUBLISHABLE_KEY'],
        test: 'test'
      }
    end

    before do
      sign_in(user)
    end

    it 'creates a hash of Environment variables to pass to the frontend' do
      controller.stub(:form_authenticity_token) { 'auth_token' }
      expect(controller.js_env(test: 'test')).to eq(expected_js_env)
    end
  end
end
