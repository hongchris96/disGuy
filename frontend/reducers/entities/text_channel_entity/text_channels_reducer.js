import {
  RECEIVE_TEXTCHANNELS,
  RECEIVE_TEXTCHANNEL,
  REMOVE_TEXTCHANNEL,
} from '../../../actions/text_channel/text_channel_actions';

const TextChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TEXTCHANNELS:
      return action.textChannels;
    case RECEIVE_TEXTCHANNEL:
      newState[action.textChannel.id] = action.textChannel;
      return newState;
    case REMOVE_TEXTCHANNEL:
      delete newState[action.textChannelId];
      return newState;
    default:
      return state;
  }
}

export default TextChannelsReducer;