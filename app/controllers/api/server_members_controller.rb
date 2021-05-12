class Api::ServerMembersController < ApplicationController

  before_action :require_logged_in!

  def index
    @server_members = ServerMember.all
    render :index
  end

  def create
    # debugger
    @server = Server.find_by(invite_code: params[:server_member][:invite_code])
    if @server
      @server_member = ServerMember.new({member_id: params[:server_member][:member_id], server_id: @server[:id]})
      if @server_member.save
        render :show
      else
        render json: @server_member.errors.full_messages, status: 422
      end
    else
      render json: ['There\'s no server with that invite code'], status: 422
    end
  end

  def destroy
    @server_member = current_user.server_member_joins.find_by(id: params[:id])
    if @server_member
      @server_member.destroy
      render :show
    else
      render json: ['Must be a Server Member to leave server'], status: 401
    end
  end

end
