class Api::DetailsController < ApplicationController
  def show
    @recipe = Recipe.find params[:id]
    p @recipe
    render :json => {
      recipe: @recipe
    }
  end

end