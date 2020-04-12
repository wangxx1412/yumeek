class Api::DogsController < ApplicationController
  def index
    render :json => {
      message: "Here is message from dog controller!"
    }
  end

end