export const fetchTextChannels = () => {
  return $.ajax({
    method: "GET",
    url: `/api/text_channels`
  });
};

export const fetchTextChannel = (textChannelId) => {
  return $.ajax({
    method: "GET",
    url: `/api/text_channels/${textChannelId}`
  });
};

export const createTextChannel = (textChannel) => {
  return $.ajax({
    method: "POST",
    url: `/api/text_channels`,
    data: {text_channel: textChannel}
  });
};

export const updateTextChannel = (textChannel) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/text_channels/${textChannel.id}`,
    data: {text_channel: textChannel}
  });
};

export const deleteTextChannel = (textChannelId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/text_channels/${textChannelId}`
  });
};