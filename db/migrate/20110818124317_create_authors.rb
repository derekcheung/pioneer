class CreateAuthors < ActiveRecord::Migration
  def self.up
    create_table :authors do |t|
      t.string :name
      t.string :position
      t.text :concept
      t.text :resume
      t.string :style
      t.text :intro
      t.timestamps
    end
    add_index :authors, :name
  end

  def self.down
    drop_table :authors
  end
end
