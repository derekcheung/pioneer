class Author < ActiveRecord::Base
  has_many :attachments, :as => :parent, :order => 'created_at desc', 
    :dependent => :destroy, :class_name => "::Attachment"
  
  mount_uploader :photo, AttachmentUploader
end
