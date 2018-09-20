require 'rails_helper'

RSpec.describe 'user info' do
  describe 'update info', type: :feature, js: true do
    let(:user) { FactoryBot.create(:user, email: 'user@example.com', password: 'password') }

    before do
      sign_in(user)
      visit '/'
      click_link 'My Account'
    end

    it 'updates my name' do
      fill_in 'Name', with: 'New Name'
      click_button 'Update Settings'
      sleep 0.2
      user.reload
      expect(user.name).to eq 'New Name'
    end

    it 'updates my email' do
      fill_in 'email', with: 'new@email.com'
      click_button 'Update Settings'
      sleep 0.2
      user.reload
      expect(user.email).to eq 'new@email.com'
    end

    it 'updates my city' do
      fill_in 'city', with: 'New City'
      click_button 'Update Settings'
      sleep 0.2
      user.reload
      expect(user.city).to eq 'New City'
    end

    it 'updates my zip' do
      fill_in 'zip', with: '84105'
      click_button 'Update Settings'
      sleep 0.2
      user.reload
      expect(user.zip).to eq '84105'
    end

    it 'updates my address' do
      fill_in 'address', with: '123 New Address'
      click_button 'Update Settings'
      sleep 0.2
      user.reload
      expect(user.address).to eq '123 New Address'
    end

    it 'updates my phone' do
      fill_in 'phone', with: '801-444-6666'
      click_button 'Update Settings'
      sleep 0.2
      user.reload
      expect(user.phone).to eq '801-444-6666'
    end
  end
end
