class Api::RecipesController < ApplicationController
  def create
    recipe = Recipe.new(recipe_params)
    
  end

  private
  def recipe_params
    params.require(:recipe).permit(:label, :step, :img_url, :src_url, :health_labels, :ingredients)
  end
end