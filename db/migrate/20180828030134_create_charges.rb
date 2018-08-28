class CreateCharges < ActiveRecord::Migration[5.2]
  def change
    create_table :charges do |t|
      t.integer :user_id
      t.float :amount
      t.string :currency
      t.string :description

      t.timestamps
    end
  end
end
