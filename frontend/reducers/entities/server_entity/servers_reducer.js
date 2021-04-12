import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER,
} from '../../../actions/server/server_actions';

const ServersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SERVERS:
      // console.log("Receive all Servers action passed in");
      return action.servers;
    case RECEIVE_SERVER:
      // console.log("Receive Server action passed in");
      newState[action.server.id] = action.server;
      return newState;
    case REMOVE_SERVER:
      // console.log("Remove Server action passed in");
      delete newState[action.serverId];
      return newState;
    default:
      return state;
  }
}

export default ServersReducer;