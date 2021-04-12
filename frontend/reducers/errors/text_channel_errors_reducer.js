import {RECEIVE_TEXTCHANNEL_ERRORS, RECEIVE_TEXTCHANNEL} from '../../actions/text_channel/text_channel_actions';
import {CLEAR_ERRORS} from '../../actions/session/session_actions';

const TextChannelErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEXTCHANNEL_ERRORS:
      return action.errors;
    case RECEIVE_TEXTCHANNEL:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default TextChannelErrorsReducer;