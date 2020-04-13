class Api::RecipesController < ApplicationController
  # Protected controller
  # before_action :authorize

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save 
      @user_recipe = UserRecipe.new(
        user_id: session[:user_id],
        recipe_id: @recipe.id
      )
    
      if @user_recipe.save!
        pp @recipe
        pp @user_recipe

      else
        redirect_to 'http://localhost:3000'
      end
    else
      redirect_to 'http://localhost:3000'
    end
  end

  def show
    @recipe = Recipe.find params[:id]
    render :json => {
      recipe: @recipe
    }
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


