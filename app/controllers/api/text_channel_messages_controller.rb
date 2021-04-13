class Api::TextChannelMessagesController < ApplicationController

  def index
    @text_channel_messages = TextChannelMessage.all
    render :index
  end

  def create
    @text_channel_message = TextChannelMessage.new(text_channel_message_params)
    if @text_channel_message.save
      render :show
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  def update
    @text_channel_message = TextChannelMessage.find_by(id: params[:id])
    if @text_channel_message && @text_channel_message.author == current_user
      if @text_channel_message.update(text_channel_message_params)
        render :show
      else
        render json: @text_channel_message.errors.full_messages, status: 422
      end
    else
      render json: ['Must be Server Owner to make changes'], status: 401
    end
  end

  def destroy
    @text_channel_message = TextChannelMessage.find_by(id: params[:id])
    if @text_channel_message && @text_channel_message.author == current_user
      @text_channel_message.destroy
      render :show
    else
      render json: ['Must be Author to make changes'], status: 401
    end
  end

  private

  def text_channel_message_params
    params.require(:text_channel_message).permit(:author_id, :channel_id, :chat_content)
  end
end
