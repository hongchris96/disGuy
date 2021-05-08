import * as ServerMemberAPIUtil from '../../utils/server_member_api_util';

import {requestServers} from './server_actions';

export const RECEIVE_SERVER_MEMBERS = "RECEIVE_SERVER_MEMBERS";
export const JOIN_SERVER = "JOIN_SERVER";
export const LEAVE_SERVER = "LEAVE_SERVER";

export const RECEIVE_SERVER_MEMBER_ERRORS = "RECEIVE_SERVER_MEMBER_ERRORS";

const receiveServerMembers = serverMembers => ({
  type: RECEIVE_SERVER_MEMBERS,
  serverMembers
});

const joinServer = serverMember => ({
  type: JOIN_SERVER,
  serverMember
});

const leaveServer = serverMemberId => ({
  type: LEAVE_SERVER,
  serverMemberId
});

const receiveServerMemberErrors = errors => ({
  type: RECEIVE_SERVER_MEMBER_ERRORS,
  errors
});

export const requestServerMembers = () => dispatch => {
  return ServerMemberAPIUtil.fetchServerMembers().then(serverMembers => dispatch(receiveServerMembers(serverMembers)));
};

export const createServerMember = (serverMember) => dispatch => {
  return ServerMemberAPIUtil.createServerMember(serverMember)
    .then(serverMember => (dispatch(joinServer(serverMember))))
    .then(() => dispatch(requestServers()))
    .fail(err => (dispatch(receiveServerMemberErrors(err.responseJSON))));
};

export const deleteServerMember = (serverMemberId) => dispatch => {
  return ServerMemberAPIUtil.deleteServerMember(serverMemberId).then(() => dispatch(leaveServer(serverMemberId)));
};