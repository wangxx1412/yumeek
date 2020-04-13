class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      # redirect user to home page after login
      redirect_to 'http://localhost:3000'
    else
      # redirect user to Login page after login failed
      redirect_to 'http://localhost:3000/login'
    end
  end

  def destroy
    session[:user_id] = nil
    # redirect user to home page after logout
    redirect_to 'http://localhost:3000'
  end

end