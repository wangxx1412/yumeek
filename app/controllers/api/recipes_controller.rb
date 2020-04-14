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
          render :json => { :success => "Recipe saved successfully" }
        else
          render :json => { :error => "Nutirent saved failed"  }
        end

      else
        render :json => { :error => "User recipe relation saved failed"  }
      end
      
    else
      render :json => { :error => "Recipe saved failed" }
    end
  end

  def show
    @recipe = Recipe.find params[:id]
    render :json => {
      recipe: @recipe
    }
  end

  def destroy
    check_and_remove
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

  def check_and_remove
    @userrecipe = UserRecipe.find_by(id: params[:id])

    if session[:user_id] == @userrecipe[:user_id]
      @nutrient = Nutrient.find_by(recipe_id: params[:id] ) 
      @nutrient.destroy
      @recipe = Recipe.find_by(id:params[:id])
      @recipe.destroy
      render :json => { :success => "Delete successfully" }
    else
     render :json => { :error => "You are not the owner" }
    end
  end
end


