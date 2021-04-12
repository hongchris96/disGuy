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

ActiveRecord::Schema.define(version: 2021_04_12_023129) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "server_members", force: :cascade do |t|
    t.integer "server_id", null: false
    t.integer "member_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_server_members_on_member_id"
    t.index ["server_id", "member_id"], name: "index_server_members_on_server_id_and_member_id", unique: true
    t.index ["server_id"], name: "index_server_members_on_server_id"
  end

  create_table "servers", force: :cascade do |t|
    t.string "server_name", null: false
    t.integer "host_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_servers_on_host_id"
    t.index ["server_name", "host_id"], name: "index_servers_on_server_name_and_host_id", unique: true
    t.index ["server_name"], name: "index_servers_on_server_name", unique: true
  end

  create_table "text_channel_messages", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "channel_id", null: false
    t.string "chat_content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_text_channel_messages_on_author_id"
    t.index ["channel_id"], name: "index_text_channel_messages_on_channel_id"
    t.index ["chat_content"], name: "index_text_channel_messages_on_chat_content"
  end

  create_table "text_channels", force: :cascade do |t|
    t.string "text_channel_name", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["server_id"], name: "index_text_channels_on_server_id"
    t.index ["text_channel_name", "server_id"], name: "index_text_channels_on_text_channel_name_and_server_id", unique: true
    t.index ["text_channel_name"], name: "index_text_channels_on_text_channel_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
