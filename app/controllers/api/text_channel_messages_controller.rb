class Api::TextChannelMessagesController < ApplicationController

  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def text_channel_message_params
    params.require(:text_channel_message).permit(:author_id, :channel_id, :chat_content)
  end
end
