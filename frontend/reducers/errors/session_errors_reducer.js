import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS} from '../../actions/session/session_actions';

const _nullError = [];

const SessionErrorsReducer = (state = _nullError, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullError;
    case CLEAR_ERRORS:
      return _nullError;
    default:
      return state;
  }
};

export default SessionErrorsReducer;