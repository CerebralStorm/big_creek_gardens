FactoryBot.define do
  factory :order_line_item do
    product_id { 1 }
    order_id { 1 }
    quantitiy { 1 }
  end
end
