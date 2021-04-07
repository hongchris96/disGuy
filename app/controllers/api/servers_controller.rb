class Api::ServersController < ApplicationController

  before_action :require_logged_in!

  def index
    @servers = Server.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  
  def server_params
    params.require(:server).permit(:server_name, :host_id, :cohost_id)
  end
end
