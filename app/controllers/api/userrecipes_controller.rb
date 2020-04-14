class Api::UserrecipesController < ApplicationController
  def update
    render :json => { :msg => params[:weekday] }
  end
end