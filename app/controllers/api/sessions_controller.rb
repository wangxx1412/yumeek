class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      # redirect user to home page after login
      render :json => { :data => user }
    else
      # redirect user to Login page after login failed
      render :json => { :error => "Invalid Credentials" }
    end
  end

  def destroy
    session[:user_id] = nil
    # redirect user to home page after logout
    render :json => { :msg => "Log out successfully" }
  end

end