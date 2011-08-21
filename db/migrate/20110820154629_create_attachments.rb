class CreateAttachments < ActiveRecord::Migration
  def self.up
    create_table :attachments do |t|
      t.integer :parent_id
      t.string :parent_type
      t.string :file_file_name
      t.string :file_content_type
      t.integer :file_file_size
      t.datetime :file_updated_at
      t.integer :uploader_id
      t.string :uploader_type
      t.string :attached_file, :nil => false

      t.timestamps
    end
    add_index :attachments, [:parent_id, :parent_type]
    add_index :attachments, [:uploader_id, :uploader_type]
  end

  def self.down
    drop_table :attachments
  end
end
