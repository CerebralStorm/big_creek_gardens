require 'rails_helper'

RSpec.describe 'user orders' do
  describe 'shows my past orders', type: :feature, js: true do
    let(:user) { FactoryBot.create(:user, email: 'user@example.com', password: 'password') }
    let!(:order) { FactoryBot.create(:order, user: user) }
    let!(:line_item) { FactoryBot.create(:order_line_item, order: order) }

    before do
      sign_in(user)
      visit '/'
      click_link 'My Account'
    end

    it 'shows my past order' do
      expect(page).to have_content("Order # #{order.id}")
    end

    it 'shows my line items for my past order' do
      visit "/orders/#{order.id}"
      expect(page).to have_content(line_item.product.name)
    end
  end
end
