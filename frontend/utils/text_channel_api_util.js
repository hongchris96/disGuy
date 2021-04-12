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
    data: {textChannel: textChannel}
  });
};

export const updateTextChannel = (textChannel) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/text_channels/${textChannel.id}`,
    data: {textChannel: textChannel}
  });
};

export const deleteTextChannel = (textChannelId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/text_channels/${textChannelId}`
  });
};