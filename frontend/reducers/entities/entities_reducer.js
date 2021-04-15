import {combineReducers} from 'redux';
import ServersReducer from './server_entity/servers_reducer';
import TextChannelsReducer from './text_channel_entity/text_channels_reducer';
import TextChannelMessagesReducer from './text_channel_entity/text_channel_messages_reducer';
import DMChannelsReducer from './dm_entity/dm_channels_reducer';
import DirectMessagesReducer from './dm_entity/direct_messages_reducer';
import UsersReducer from './user_entity/user_reducers';
// import others?

const EntitiesReducer = combineReducers({
  servers: ServersReducer,
  textChannels: TextChannelsReducer,
  textChannelMessages: TextChannelMessagesReducer,
  dmChannels: DMChannelsReducer,
  directMessages: DirectMessagesReducer,
  users: UsersReducer
  // going to add other tables
});

export default EntitiesReducer;

