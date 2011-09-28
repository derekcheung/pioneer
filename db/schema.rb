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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110905035141) do

  create_table "abouts", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "attachments", :force => true do |t|
    t.integer  "parent_id"
    t.string   "parent_type"
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
    t.integer  "uploader_id"
    t.string   "uploader_type"
    t.string   "attached_file"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "attachments", ["parent_id", "parent_type"], :name => "index_attachments_on_parent_id_and_parent_type"
  add_index "attachments", ["uploader_id", "uploader_type"], :name => "index_attachments_on_uploader_id_and_uploader_type"

  create_table "authors", :force => true do |t|
    t.string   "name"
    t.string   "position"
    t.text     "concept"
    t.text     "resume"
    t.string   "style"
    t.text     "intro"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo"
  end

  add_index "authors", ["name"], :name => "index_authors_on_name"

  create_table "news", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "insertdate"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "hashed_password"
    t.string   "salt"
    t.string   "email"
    t.string   "reset_password_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
