class WelcomeController < ApplicationController
  def home
  end
  def show
    begin
      render params[:page]
    rescue ActionView::MissingTemplate => e
      render_404 
    end
  end
end
