import {
  RECEIVE_DMCHANNELS,
  RECEIVE_DMCHANNEL,
  REMOVE_DMCHANNEL,
} from '../../../actions/dm/dm_channel_actions';

const DMChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_DMCHANNELS:
      return action.dmChannels;
    case RECEIVE_DMCHANNEL:
      newState[action.dmChannel.id] = action.dmChannel;
      return newState;
    case REMOVE_DMCHANNEL:
      delete newState[action.dmChannelId];
      return newState;
    default:
      return state;
  }
}

export default DMChannelsReducer;