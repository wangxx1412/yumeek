class Api::RecipesController < ApplicationController
  # Protected controller
  # before_filter :authorize

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save 
      puts session[:user_id]
      pp current_user

      @user_recipe = UserRecipe.new(
        user_id: 1,
        recipe_id: @recipe.id
      )
    
      if @user_recipe.save!
        pp @user_recipe
        pp "yeh"
      else
        redirect_to 'http://localhost:3000'
      end
    else
      redirect_to 'http://localhost:3000'
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(
      :label, 
      :steps, 
      :img_url, 
      :src_url, 
      :health_labels, 
      :ingredients
      )
  end
end


