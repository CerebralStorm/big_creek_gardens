# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_08_164022) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "charges", force: :cascade do |t|
    t.integer "user_id"
    t.integer "order_id"
    t.float "amount"
    t.string "stripe_customer"
    t.string "currency"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_charges_on_order_id"
    t.index ["user_id"], name: "index_charges_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_line_items", force: :cascade do |t|
    t.integer "product_id"
    t.integer "order_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_order_line_items_on_order_id"
    t.index ["product_id"], name: "index_order_line_items_on_product_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id"
    t.float "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "price"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "phone"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "stripe_token"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
