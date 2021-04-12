import {RECEIVE_SERVER_ERRORS, RECEIVE_SERVER} from '../../actions/server/server_actions';
import {CLEAR_ERRORS} from '../../actions/session/session_actions';

const ServerErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;
    case RECEIVE_SERVER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ServerErrorsReducer;