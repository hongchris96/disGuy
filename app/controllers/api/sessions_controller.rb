class Api::SessionsController < ApplicationController

  # before_action :require_logged_in!, only: [:destroy]

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show' # user show jbuilder, might change later to server index or something else
    else
      render json: ['Invalid username or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show' # Unsure? user info goes the frontend, when no current user, render login page
    else
      render json: ["Already logged out"], status: 404
    end
  end

end
