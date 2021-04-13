import {
  RECEIVE_TEXTCHANNEL_MESSAGES,
  RECEIVE_TEXTCHANNEL_MESSAGE,
  REMOVE_TEXTCHANNEL_MESSAGE,
} from '../../../actions/text_channel/text_channel_message_actions';

const TextChannelMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TEXTCHANNEL_MESSAGES:
      return action.textChannelMessages;
    case RECEIVE_TEXTCHANNEL_MESSAGE:
      newState[action.textChannelMessage.id] = action.textChannelMessage;
      return newState;
    case REMOVE_TEXTCHANNEL_MESSAGE:
      delete newState[action.textChannelMessageId];
      return newState;
    default:
      return state;
  }
}

export default TextChannelMessagesReducer;