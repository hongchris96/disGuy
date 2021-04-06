import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../../actions/session/session_actions';

const _nullUser = Object.freeze({
  currentUserId: null
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;