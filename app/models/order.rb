class Order < ApplicationRecord
  has_many :order_line_items
  has_many :charges
  accepts_nested_attributes_for :order_line_items
end
