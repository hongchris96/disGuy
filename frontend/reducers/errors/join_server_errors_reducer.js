import {RECEIVE_SERVER_MEMBER_ERRORS, JOIN_SERVER} from '../../actions/server/server_member_actions';
import {CLEAR_ERRORS} from '../../actions/session/session_actions';

const JoinServerErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER_MEMBER_ERRORS:
      return action.errors;
    case JOIN_SERVER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default JoinServerErrorsReducer;