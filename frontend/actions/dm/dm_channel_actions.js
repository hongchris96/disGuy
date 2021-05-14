import * as DMChannelAPIUtil from '../../utils/direct_message_channel_api_util';

export const RECEIVE_DMCHANNELS = "RECEIVE_DMCHANNELS";
export const RECEIVE_DMCHANNEL = "RECEIVE_DMCHANNEL";
export const REMOVE_DMCHANNEL = "REMOVE_DMCHANNEL";
export const RECEIVE_DMCHANNEL_ERRORS = "RECEIVE_DMCHANNEL_ERRORS";

const receiveDMChannels = dmChannels => ({
  type: RECEIVE_DMCHANNELS,
  dmChannels
});

const receiveDMChannel = dmChannel => ({
  type: RECEIVE_DMCHANNEL,
  dmChannel
});

const removeDMChannel = dmChannelId => ({
  type: REMOVE_DMCHANNEL,
  dmChannelId
});

const receiveDMChannelErrors = errors => ({
  type: RECEIVE_DMCHANNEL_ERRORS,
  errors
});

export const requestDMChannels = () => dispatch => {
  return DMChannelAPIUtil.fetchDirectMessageChannels().then(dmChannels => dispatch(receiveDMChannels(dmChannels)));
};

export const requestDMChannel = (dmChannelId) => dispatch => {
  return DMChannelAPIUtil.fetchDirectMessageChannel(dmChannelId).then(dmChannel => dispatch(receiveDMChannel(dmChannel)));
};

export const createDMChannel = (dmChannel) => dispatch => {
  return DMChannelAPIUtil.createDirectMessageChannel(dmChannel)
    .then(dmChannel => dispatch(receiveDMChannel(dmChannel)))
    .fail(err => (dispatch(receiveDMChannelErrors(err.responseJSON))));
};

export const deleteDMChannel = (dmChannelId) => dispatch => {
  return DMChannelAPIUtil.deleteDirectMessageChannel(dmChannelId).then(() => dispatch(removeDMChannel(dmChannelId)));
};