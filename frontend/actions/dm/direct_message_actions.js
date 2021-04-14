import * as DirectMessageAPIUtil from '../../utils/direct_message_api_util';

export const RECEIVE_DIRECT_MESSAGES = "RECEIVE_DIRECT_MESSAGES";
export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";
export const REMOVE_DIRECT_MESSAGE = "REMOVE_DIRECT_MESSAGE";

// export const RECEIVE_DIRECT_MESSAGE_ERRORS = "RECEIVE_DIRECT_MESSAGE_ERRORS";

const receiveDirectMessages = directMessages => ({
  type: RECEIVE_DIRECT_MESSAGES,
  directMessages
});

export const receiveDirectMessage = directMessage => ({
  type: RECEIVE_DIRECT_MESSAGE,
  directMessage
});

export const removeDirectMessage = directMessageId => ({
  type: REMOVE_DIRECT_MESSAGE,
  directMessageId
});

// const receiveDirectMessageErrors = errors => ({
//   type: RECEIVE_DIRECT_MESSAGE_ERRORS,
//   errors
// });

export const requestDirectMessages = () => dispatch => {
  return DirectMessageAPIUtil.fetchDirectMessages().then(messages => dispatch(receiveDirectMessages(messages)));
};

export const createDirectMessage = (directMessage) => dispatch => {
  return DirectMessageAPIUtil.createDirectMessage(directMessage)
    .then(message => dispatch(receiveDirectMessage(message)));
};

export const updateDirectMessage = (directMessage) => dispatch => {
  return DirectMessageAPIUtil.updateDirectMessage(directMessage)
    .then(message => dispatch(receiveDirectMessage(message)));
};

export const deleteDirectMessage = (directMessageId) => dispatch => {
  return DirectMessageAPIUtil.deleteDirectMessage(directMessageId).then(() => dispatch(removeDirectMessage(directMessageId)));
};