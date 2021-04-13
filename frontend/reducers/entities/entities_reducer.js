import {combineReducers} from 'redux';
import ServersReducer from './server_entity/servers_reducer';
import TextChannelsReducer from './text_channel_entity/text_channels_reducer';
// import textChannelMessageReducers
// import directMessageChannelReducers
// import directMessageReducers
// import others?

const EntitiesReducer = combineReducers({
  servers: ServersReducer,
  textChannels: TextChannelsReducer
  // going to add other tables
});

export default EntitiesReducer;

