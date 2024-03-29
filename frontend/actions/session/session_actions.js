import * as SessionAPIUtil from '../../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


// Regular action
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// err => (dispatch(receiveSessionErrors(err.responseJSON)))


// Thunk action
export const createUser = user => dispatch => {
  return SessionAPIUtil.createUser(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveSessionErrors(err.responseJSON))));
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveSessionErrors(err.responseJSON))));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));
};

