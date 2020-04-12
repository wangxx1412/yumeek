class Api::RecipesController < ApplicationController
  # Protected controller
  # before_filter :authorize

  def create
    recipe = Recipe.new(recipe_params)

    if recipe.save 
      puts session[:user_id]
      puts recipe.id
      user_recipe = UserRecipe.new(
        recipe_id: recipe.id,
        user_id: session[:user_id]
      )
      if user_recipe.save
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


