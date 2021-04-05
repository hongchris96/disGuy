import * as UserAPIUtil from '../../utils/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER"

// Regular action
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// Thunk action
export const fetchUser = userId => dispatch => {
  return UserAPIUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)));
};

export const createUser = user => dispatch => {
  return UserAPIUtil.createUser(user).then(user => dispatch(receiveUser(user)));
};

