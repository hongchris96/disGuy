class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    if params[:type] == 'dm'
      @channel = DirectMessageChannel.find_by(id: params[:id])
    elsif params[:type] == 'text_channel'
      @channel = TextChannel.find_by(id: params[:id])
    end
    stream_for @channel
  end

  def speak(data)
    message = TextChannelMessage.new(data['message'])

    if message.save
      socket = {message: message, type: 'message'}
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def update(data)
    message = TextChannelMessage.find_by(id: data['message']['id'])

    if message.update(data['message'])
      socket = {message: message, type: 'message'}
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def poof(data)
    message = TextChannelMessage.find_by(id: data['message']['id'])

    if message.author.id == data['currentUser']['id'] || message.text_channel.server.host_id == data['currentUser']['id']
      if message.destroy
        socket = {message: message, type: 'no_message'}
        ChatChannel.broadcast_to(@channel, socket)
      end
    else
      socket = { type: 'inaction'}
      ChatChannel.broadcast_to(@channel, socket)
    end
  end


  def speak2(data)
    message = DirectMessage.new(data['message'])

    if message.save
      socket = {message: message, type: 'message'}
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def update2(data)
    message = DirectMessage.find_by(id: data['message']['id'])

    if message.update(data['message'])
      socket = {message: message, type: 'message'}
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def poof2(data)
    message = DirectMessage.find_by(id: data['message']['id'])

    if message.author.id == data['currentUser']['id']
      if message.destroy
        socket = {message: message, type: 'no_message'}
        ChatChannel.broadcast_to(@channel, socket)
      end
    else
      socket = { type: 'inaction'}
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
