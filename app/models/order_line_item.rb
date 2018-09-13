class OrderLineItem < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validates :order, presence: true
  validates :product, presence: true

  def total_price
    product.price * quantity
  end
end
