json.id order.id
json.total order.total
json.user order.user
json.createdAt order.created_at
json.orderLineItems order.order_line_items do |order_line_item|
  json.id order_line_item.id
  json.name order_line_item.product.name
  json.price order_line_item.product.price
  json.quantity order_line_item.quantity
  json.total order_line_item.total_price
end
