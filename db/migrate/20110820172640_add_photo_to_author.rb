class AddPhotoToAuthor < ActiveRecord::Migration
  def self.up
    add_column :authors, :photo, :string
  end

  def self.down
    remove_column :authors, :photo
  end
end
