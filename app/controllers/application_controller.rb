class ApplicationController < ActionController::Base

  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in!
    unless logged_in?
      render json: ['Action require Logged in'], status: 404
    end
  end

end
