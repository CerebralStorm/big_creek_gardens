require 'rails_helper'

RSpec.describe OrderLineItem, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:product) }
    it { is_expected.to belong_to(:order) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:product) }
    it { is_expected.to validate_presence_of(:order) }
  end

  describe '#total_price' do
    let!(:product) { FactoryBot.create(:product, price: 10) }
    let!(:order_line_item) { FactoryBot.create(:order_line_item, product: product, quantity: 5) }

    it 'computes the total price' do
      expect(order_line_item.total_price).to eq 50
    end
  end
end
