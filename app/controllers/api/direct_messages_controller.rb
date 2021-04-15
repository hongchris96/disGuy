class Api::DirectMessagesController < ApplicationController
  def index
    @direct_messages = DirectMessage.all
    render :index
  end

  def create
    @direct_message = DirectMessage.new(direct_message_params)
    if @direct_message.save
      render :show
    else
      render json: @direct_message.errors.full_messages, status: 422
    end
  end

  def update
    @direct_message = DirectMessage.find_by(id: params[:id])
    if @direct_message && @direct_message.author == current_user
      if @direct_message.update(direct_message_params)
        render :show
      else
        render json: @direct_message.errors.full_messages, status: 422
      end
    else
      render json: ['Must be Author to make changes'], status: 401
    end
  end

  def destroy
    @direct_message = DirectMessage.find_by(id: params[:id])
    if @direct_message && @direct_message.author == current_user
      @direct_message.destroy
      render :show
    else
      render json: ['Must be Author to make changes'], status: 401
    end
  end

  private

  def direct_message_params
    params.require(:direct_message).permit(:author_id, :channel_id, :chat_content)
  end
end
