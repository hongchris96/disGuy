@direct_message_channels.each do |direct_message_channel|
  json.set! direct_message_channel.id do
    json.partial! 'directchannel', direct_message_channel: direct_message_channel
  end
end
