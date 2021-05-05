class Api::ServerMembersController < ApplicationController

  def create
    @server_member = ServerMemeber.new(server_member_params)
    if @server_member.save
      render :show
    else
      render json: ['Server you\'re trying to join does not exist'], status: 422
    end
  end

  def destroy
    @server_member = current_user.server_member_joins.find_by(member_id: params[:member_id])
    if @server_member
      @server_member.destroy
      render :show
    else
      render json: ['Must be a Server Member to leave server'], status: 401
    end
  end

  private
  def server_member_params
    params.require(:server_member).permit(:server_id, :member_id)
  end
end
