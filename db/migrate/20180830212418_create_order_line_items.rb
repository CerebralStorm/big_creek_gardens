class CreateOrderLineItems < ActiveRecord::Migration[5.2]
  def change
    create_table :order_line_items do |t|
      t.integer :product_id, index: true
      t.integer :order_id, index: true
      t.integer :quantitiy

      t.timestamps
    end
  end
end
