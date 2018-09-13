FactoryBot.define do
  factory :order_line_item do
    product
    order
    quantity { 1 }
  end
end
