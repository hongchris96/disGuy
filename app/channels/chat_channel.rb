class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    # debugger
    # Creating a variable that is a Message string
    # value of the string is the value of the body -> the value of message key in data
    message = TextChannelMessage.new(data['message'])

    if message.save
      # socket converts the message string to an object
      socket = {message: message, type: 'message'}
      # broadcasting this message object
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    messages = TextChannelMessage.all.collect(&:body)
    socket = { messages: messages, type: 'messages'}
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
