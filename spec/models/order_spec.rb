require 'rails_helper'

RSpec.describe Order, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:charges) }
    it { is_expected.to have_many(:order_line_items) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:user) }
  end

  describe '#compute_total' do
    let(:order) { FactoryBot.create(:order) }
    let(:product1) { FactoryBot.create(:product, price: 10) }
    let(:product2) { FactoryBot.create(:product, price: 15) }
    let(:order_line_item1) { FactoryBot.build(:order_line_item, product: product1, quantity: 1) }
    let(:order_line_item2) { FactoryBot.build(:order_line_item, product: product2, quantity: 2) }

    it 'computes the total price of all the line items' do
      order.order_line_items << order_line_item1
      order.order_line_items << order_line_item2
      order.save
      order.reload
      expect(order.total).to eq 40
    end
  end

  describe '#total_in_cents' do
    let(:order) { FactoryBot.create(:order) }

    it 'converts the dollar amount to cents' do
      order.total = 30
      expect(order.total_in_cents).to eq 30 * 100
    end
  end
end
