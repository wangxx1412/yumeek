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

  def show
    @recipe = Recipe.find params[:id]
    render :json => {
      recipe: @recipe
    }
  end

  def destroy
    @nutrient = Nutrient.find_by(recipe_id: params[:id] ) 
    @nutrient.destroy
    @userrecipe = UserRecipe.find_by(recipe_id: params[:id] ) 
    @userrecipe.destroy
    @recipe = Recipe.find_by(id:params[:id]  )
    @recipe.destroy
    # @recipe = Recipe.find params[:id]
    # @recipe.destroy
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


