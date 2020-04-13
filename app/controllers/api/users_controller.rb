class Api::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      # redirect user to home page after signup
      redirect_to 'http://localhost:3000'
    else
      # redirect user to home page after signup failed
      redirect_to 'http://localhost:3000/signup'
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end