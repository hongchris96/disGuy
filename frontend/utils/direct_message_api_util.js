export const fetchDirectMessages = () => {
  return $.ajax({
    method: "GET",
    url: `/api/direct_messages`
  });
};

export const createDirectMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: `/api/direct_messages`,
    data: {direct_message: message}
  });
};

export const updateDirectMessage = (message) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/direct_messages/${message.id}`,
    data: {direct_message: message}
  });
};

export const deleteDirectMessage = (messageId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/direct_messages/${messageId}`
  });
};