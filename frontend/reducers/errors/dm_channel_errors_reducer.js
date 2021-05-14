import {RECEIVE_DMCHANNEL_ERRORS, RECEIVE_DMCHANNEL} from '../../actions/dm/dm_channel_actions';
import {CLEAR_ERRORS} from '../../actions/session/session_actions';

const DMChannelErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DMCHANNEL_ERRORS:
      return action.errors;
    case RECEIVE_DMCHANNEL:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default DMChannelErrorsReducer;