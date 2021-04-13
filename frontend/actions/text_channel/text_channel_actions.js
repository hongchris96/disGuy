import * as TextChannelAPIUtil from '../../utils/text_channel_api_util';

export const RECEIVE_TEXTCHANNELS = "RECEIVE_TEXTCHANNELS";
export const RECEIVE_TEXTCHANNEL = "RECEIVE_TEXTCHANNEL";
export const REMOVE_TEXTCHANNEL = "REMOVE_TEXTCHANNEL";

export const RECEIVE_TEXTCHANNEL_ERRORS = "RECEIVE_TEXTCHANNEL_ERRORS";

const receiveTextChannels = textChannels => ({
  type: RECEIVE_TEXTCHANNELS,
  textChannels
});

const receiveTextChannel = textChannel => ({
  type: RECEIVE_TEXTCHANNEL,
  textChannel
});

const removeTextChannel = textChannelId => ({
  type: REMOVE_TEXTCHANNEL,
  textChannelId
});

const receiveTextChannelErrors = errors => ({
  type: RECEIVE_TEXTCHANNEL_ERRORS,
  errors
});

export const requestTextChannels = () => dispatch => {
  return TextChannelAPIUtil.fetchTextChannels().then(textChannels => dispatch(receiveTextChannels(textChannels)));
};

export const requestTextChannel = (textChannelId) => dispatch => {
  return TextChannelAPIUtil.fetchTextChannel(textChannelId).then(textChannel => dispatch(receiveTextChannel(textChannel)));
};

export const createTextChannel = (textChannel) => dispatch => {
  return TextChannelAPIUtil.createTextChannel(textChannel)
    .then(textChannel => (dispatch(receiveTextChannel(textChannel))),
    err => (dispatch(receiveTextChannelErrors(err.responseJSON))));
};

export const updateTextChannel = (textChannel) => dispatch => {
  return TextChannelAPIUtil.updateTextChannel(textChannel)
    .then(textChannel => (dispatch(receiveTextChannel(textChannel))),
    err => (dispatch(receiveTextChannelErrors(err.responseJSON))));
};

export const deleteTextChannel = (textChannelId) => dispatch => {
  return TextChannelAPIUtil.deleteTextChannel(textChannelId).then(() => dispatch(removeTextChannel(textChannelId)));
};