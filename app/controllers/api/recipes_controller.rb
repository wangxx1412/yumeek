class Api::RecipesController < ApplicationController
  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save 
      @user_recipe = UserRecipe.new(
        user_id: session[:user_id],
        recipe_id: @recipe.id
      )
    
      if @user_recipe.save!
        @nutrient = Nutrient.new(
          recipe_id: @recipe.id,
          protein: params[:nutrients][:protein],
          fiber: params[:nutrients][:fiber],
          carbs: params[:nutrients][:carbs],
          fat: params[:nutrients][:fat],
          energies: params[:nutrients][:energies]
        )

        if @nutrient.save!
          render :json => { :error => 0, :success => 1 }
        else
          render :json => { :error => 1, :success => 0 }
        end

      else
        render :json => { :error => 1, :success => 0 }
      end
      
    else
      render :json => { :error => 1, :success => 0 }
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(
      :label, 
      :steps, 
      :img_url, 
      :src_url, 
      :health_labels=>[], 
      :ingredients=>[]
      )
  end
end


