require 'rails_helper'

RSpec.describe 'registration' do
  describe 'signin', type: :feature, js: true do
    before do
      FactoryBot.create(:user, email: 'user@example.com', password: 'password')
    end

    it 'signs me in' do
      visit '/'
      click_link 'Sign In'
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'password'
      click_button 'Log in'
      expect(find('#signOutForm')).to be_present
    end

    it 'requires the correct password' do
      visit '/'
      click_link 'Sign In'
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'invalid'
      click_button 'Log in'
      expect(page).to have_content('Invalid Email or password.')
    end

    it 'requires a valid email' do
      visit '/'
      click_link 'Sign In'
      fill_in 'Email', with: 'doesnt@exist.com'
      fill_in 'Password', with: 'password'
      click_button 'Log in'
      expect(page).to have_content('Invalid Email or password.')
    end
  end

  describe 'sign up', type: :feature, js: true do
    it 'requires an email' do
      visit '/'
      click_link 'Sign Up'
      fill_in 'Password', with: 'password'
      fill_in 'Password confirmation', with: 'password'
      click_button 'Sign up'
      expect(page).to have_content("Email can't be blank")
    end

    it 'requires password to match' do
      visit '/'
      click_link 'Sign Up'
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'password'
      fill_in 'Password confirmation', with: 'nomatch'
      click_button 'Sign up'
      expect(page).to have_content("Password confirmation doesn't match Password")
    end

    it 'signs me up' do
      visit '/'
      click_link 'Sign Up'
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'password'
      fill_in 'Password confirmation', with: 'password'
      click_button 'Sign up'
      expect(find('#signOutForm')).to be_present
      expect(User.count).to eq 1
    end
  end
end
