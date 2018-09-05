class Order < ApplicationRecord
  belongs_to :user
  has_many :order_line_items
  has_many :charges
  accepts_nested_attributes_for :order_line_items

  before_save :compute_total

  def compute_total
    self.total = order_line_items.sum(&:total_price)
  end

  def total_in_cents
    (total * 100).to_i
  end
end