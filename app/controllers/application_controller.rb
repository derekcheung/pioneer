class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def authorize    
    unless User.find_by_id(session[:user_id])       
     session[:original_uri] = request.request_uri
     flash[:notice] = "Please log in"
     redirect_to :controller => 'admin', :action => 'login'      
    end     
  end
end
