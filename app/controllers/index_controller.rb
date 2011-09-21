class IndexController < ApplicationController
  def index
    @news = News.all
  end

end
