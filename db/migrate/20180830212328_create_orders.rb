class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :user_id, index: true
      t.float :total

      t.timestamps
    end
  end
end
