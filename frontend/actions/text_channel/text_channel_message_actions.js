import * as TextChannelMessageAPIUtil from '../../utils/text_channel_message_api_util';

export const RECEIVE_TEXTCHANNEL_MESSAGES = "RECEIVE_TEXTCHANNEL_MESSAGES";
export const RECEIVE_TEXTCHANNEL_MESSAGE = "RECEIVE_TEXTCHANNEL_MESSAGE";
export const REMOVE_TEXTCHANNEL_MESSAGE = "REMOVE_TEXTCHANNEL_MESSAGE";

export const RECEIVE_TEXTCHANNEL_MESSAGE_ERRORS = "RECEIVE_TEXTCHANNEL_MESSAGE_ERRORS";

const receiveTextChannelMessages = textChannelMessages => ({
  type: RECEIVE_TEXTCHANNEL_MESSAGES,
  textChannelMessages
});

export const receiveTextChannelMessage = textChannelMessage => ({
  type: RECEIVE_TEXTCHANNEL_MESSAGE,
  textChannelMessage
});

const removeTextChannelMessage = textChannelMessageId => ({
  type: REMOVE_TEXTCHANNEL_MESSAGE,
  textChannelMessageId
});

const receiveTextChannelMessageErrors = errors => ({
  type: RECEIVE_TEXTCHANNEL_MESSAGE_ERRORS,
  errors
});

export const requestTextChannelMessages = () => dispatch => {
  return TextChannelMessageAPIUtil.fetchTextChannelMessages().then(messages => dispatch(receiveTextChannelMessages(messages)));
};

export const createTextChannelMessage = (textChannelMessage) => dispatch => {
  return TextChannelMessageAPIUtil.createTextChannelMessage(textChannelMessage)
    .then(message => dispatch(receiveTextChannelMessage(message)));
};

export const updateTextChannelMessage = (textChannelMessage) => dispatch => {
  return TextChannelMessageAPIUtil.updateTextChannelMessage(textChannelMessage)
    .then(message => (dispatch(receiveTextChannelMessage(message))),
    err => (dispatch(receiveTextChannelMessageErrors(err.responseJSON))));
};

export const deleteTextChannelMessage = (textChannelMessageId) => dispatch => {
  return TextChannelMessageAPIUtil.deleteTextChannelMessage(textChannelMessageId).then(() => dispatch(removeTextChannelMessage(textChannelMessageId)));
};