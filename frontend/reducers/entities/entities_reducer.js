import {combineReducers} from 'redux';
import ServersReducer from './server_entity/servers_reducer';
// import textChannelReducers
// import textChannelMessageReducers
// import directMessageChannelReducers
// import directMessageReducers
// import others?

const EntitiesReducer = combineReducers({
  servers: ServersReducer
  // going to add other tables
});

export default EntitiesReducer;

