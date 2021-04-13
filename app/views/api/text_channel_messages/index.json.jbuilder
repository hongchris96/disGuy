@text_channel_messages.each do |message|
  json.set! message.id do
    json.partial! 'text_message', text_channel_message: message
  end
end
