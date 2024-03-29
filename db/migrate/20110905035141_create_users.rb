class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :name
      t.string :hashed_password
      t.string :salt
      t.string :email
      t.string :reset_password_token

      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
