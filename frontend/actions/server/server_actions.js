import * as ServerAPIUtil from '../../utils/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";

const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});

const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const requestServers = () => dispatch => {
  return ServerAPIUtil.fetchServers().then(servers => dispatch(receiveServers(servers)));
};

export const requestServer = (serverId) => dispatch => {
  return ServerAPIUtil.fetchServer(serverId).then(server => dispatch(receiveServer(server)));
};

export const createServer = (server) => dispatch => {
  return ServerAPIUtil.createServer(server)
    .then(server => (dispatch(receiveServer(server))),
    err => (dispatch(receiveServerErrors(err.responseJSON))));
};

export const updateServer = (server) => dispatch => {
  return ServerAPIUtil.updateServer(server).then(server => dispatch(receiveServer(server)));
};

export const deleteServer = (serverId) => dispatch => {
  return ServerAPIUtil.deleteServer(serverId).then(() => dispatch(removeServer(serverId)));
};