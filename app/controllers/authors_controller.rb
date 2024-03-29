class AuthorsController < ApplicationController
  # GET /authors
  # GET /authors.xml
  
  before_filter :find_author, :only => [ :show, :edit, :destroy, :update, :attach, :attached ]
  
  def index
    @authors = Author.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @authors }
    end
  end

  # GET /authors/1
  # GET /authors/1.xml
  def show

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @author }
    end
  end

  # GET /authors/new
  # GET /authors/new.xml
  def new
    @author = Author.new
    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @author }
    end
  end

  # GET /authors/1/edit
  def edit
  end

  # POST /authors
  # POST /authors.xml
  def create
    @author = Author.new(params[:author])

    respond_to do |format|
      if @author.save
        format.html { redirect_to(@author, :notice => 'Author was successfully created.') }
        format.xml  { render :xml => @author, :status => :created, :location => @author }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @author.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /authors/1
  # PUT /authors/1.xml
  def update

    respond_to do |format|
      if @author.update_attributes(params[:author])
        format.html { redirect_to(@author, :notice => 'Author was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @author.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /authors/1
  # DELETE /authors/1.xml
  def destroy
    @author.destroy

    respond_to do |format|
      format.html { redirect_to(authors_url) }
      format.xml  { head :ok }
    end
  end

  def attach
    if @author.attachment
      @attachment = @author.attachment
    else
      @attachment = @author.attachments.new 
    end
  end

  def attached
    if @author.attachment
      @attachment = @author.attachment.update_attributes(params[:attachment])
    else
      @attachment = @author.attachments.new(params[:attachment])
    end
    # @attachment.uploader = @author  
    if @attachment.save
        # format.html { redirect_to(@author, :notice => 'Author was successfully created.') }
        # format.xml  { render :xml => @author, :status => :created, :location => @author }
        redirect_to(@author, :notice => t(:attachment_uploaded))
    else
      render(:action => :attach)
    end
  end

  private
  
  def find_author
    @author ||= Author.find(params[:id])
  end
end
