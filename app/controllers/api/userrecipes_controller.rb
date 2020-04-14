class Api::UserrecipesController < ApplicationController
  def update
    if session[:user_id].to_s == params[:userid]
      @userrecipe = UserRecipe.find_by(recipe_id: params[:recipeid], user_id: params[:userid])
      @userrecipe.weekday = params[:weekday]
      render :json => { :msg => "User_recipe updated weekday", :data=> @userrecipe }
    else
      render :json => { :error => "You are not owner of this recipe" }
    end
  end
end