class Api::TextChannelsController < ApplicationController

  before_action :require_logged_in!

  def index
    @text_channels = TextChannel.all
    render :index
  end

  def show
    @text_channel = TextChannel.find_by(id: params[:id])
    render :show
  end

  def create
    @text_channel = TextChannel.new(text_channel_params)
    if @text_channel.save
      render :show
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  def update
    @text_channel = TextChannel.find_by(id: params[:id])
    if @text_channel && @text_channel.server.server_host == current_user
      if @text_channel.update(text_channel_params)
        render :show
      else
        render json: @text_channel.errors.full_messages, status: 422
      end
    else
      render json: ['Must be Server Owner to make changes'], status: 401
    end
  end

  def destroy
    @text_channel = TextChannel.find_by(id: params[:id])
    if @text_channel && @text_channel.server.server_host == current_user
      @text_channel.destroy
      render :show
    else
      render json: ['Must be Server Owner to make changes'], status: 401
    end
  end

  private

  def text_channel_params
    params.require(:text_channel).permit(:text_channel_name, :server_id)
  end
end
