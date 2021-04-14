export const fetchDirectMessageChannels = () => {
  return $.ajax({
    method: "GET",
    url: `/api/direct_message_channels`
  });
};

export const fetchDirectMessageChannel = (directMessageChannelId) => {
  return $.ajax({
    method: "GET",
    url: `/api/direct_message_channels/${directMessageChannelId}`
  });
};

export const createDirectMessageChannel = (directMessageChannel) => {
  return $.ajax({
    method: "POST",
    url: `/api/direct_message_channels`,
    data: {direct_message_channel: directMessageChannel}
  });
};

export const deleteDirectMessageChannel = (directMessageChannelId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/direct_message_channels/${directMessageChannelId}`
  });
};