import {RECEIVE_TEXTCHANNEL_MESSAGE_ERRORS, RECEIVE_TEXTCHANNEL_MESSAGE} from '../../actions/text_channel/text_channel_message_actions';
import {CLEAR_ERRORS} from '../../actions/session/session_actions';

const TextChannelMessageErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEXTCHANNEL_MESSAGE_ERRORS:
      return action.errors;
    case RECEIVE_TEXTCHANNEL_MESSAGE:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default TextChannelMessageErrorsReducer;