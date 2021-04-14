class Api::DirectMessageChannelsController < ApplicationController
  before_action :require_logged_in!

  def index
    @direct_message_channels = DirectMessageChannel.all
    render :index
  end

  def show
    @direct_message_channel = DirectMessageChannel.find_by(id: params[:id])
    render :show
  end

  def create
    @direct_message_channel = DirectMessageChannel.new(direct_message_channel_params)
    if @direct_message_channel.save
      render :show
    else
      render json: @direct_message_channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @direct_message_channel = DirectMessageChannel.find_by(id: params[:id])
    if @direct_message_channel.destroy
      render :show
    else
      render json: ['Must be Channel Member to make changes'], status: 401
    end
  end

  private

  def direct_message_channel_params
    params.require(:direct_message_channel).permit(:user1_id, :user2_id)
  end
end
