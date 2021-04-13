export const fetchTextChannelMessages = () => {
  return $.ajax({
    method: "GET",
    url: `/api/text_channel_messages`
  });
};

export const createTextChannelMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: `/api/text_channel_messages`,
    data: {text_channel_message: message}
  });
};

export const updateTextChannelMessage = (message) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/text_channel_messages/${message.id}`,
    data: {text_channel_message: message}
  });
};

export const deleteTextChannelMessage = (messageId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/text_channel_messages/${messageId}`
  });
};