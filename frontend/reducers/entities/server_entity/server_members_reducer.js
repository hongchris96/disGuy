import {
  RECEIVE_SERVER_MEMBERS,
  JOIN_SERVER,
  LEAVE_SERVER,
} from '../../../actions/server/server_member_actions';

const ServerMembersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SERVER_MEMBERS:
      return action.serverMembers;
    case JOIN_SERVER:
      newState[action.serverMember.id] = action.serverMember;
      return newState;
    case LEAVE_SERVER:
      delete newState[action.serverMemberId];
      return newState;
    default:
      return state;
  }
}

export default ServerMembersReducer;