class Attachment < ActiveRecord::Base

  belongs_to :parent, :polymorphic => true
  belongs_to :uploader, :polymorphic => true
  
  mount_uploader :attached_file, AttachmentUploader
  
  before_save :cache_file_properties
  
  validates_presence_of :attached_file
  
  class << self

    def fix_all
      Attachment.all.each do |attachment|
        Formatador.display_line("Checking for file [blue]#{attachment.id}[/]")
        attachment.send(:fix) if attachment.attached_file.file.nil?
      end
    end
    
  end
  
  private
  
    def cache_file_properties
      self.file_content_type = attached_file.file.content_type
      self.file_file_size = attached_file.file.size
    end
  
    # this fix required to move already uploaded files to S3
    def fix
      path = Rails.root.join("public/system/files/#{self.id}/original/#{self.file_file_name}")
      Formatador.display_line("Uploading file at: [green]#{path}[/]")
      if File.exists?(path)
        self.attached_file.store!(File.open(path))
        self.update_attribute(:attached_file, self.file_file_name)
        Formatador.display_line("[yellow]Done![/]")
      else
        Formatador.display_line("[red]ERROR: [/]File does not exist!")
      end
    end
end
