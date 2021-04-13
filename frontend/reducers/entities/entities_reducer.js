import {combineReducers} from 'redux';
import ServersReducer from './server_entity/servers_reducer';
import TextChannelsReducer from './text_channel_entity/text_channels_reducer';
import TextChannelMessagesReducer from './text_channel_entity/text_channel_messages_reducer';
// import directMessageChannelReducers
// import directMessageReducers
// import others?

const EntitiesReducer = combineReducers({
  servers: ServersReducer,
  textChannels: TextChannelsReducer,
  textChannelMessages: TextChannelMessagesReducer
  // going to add other tables
});

export default EntitiesReducer;

