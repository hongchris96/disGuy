import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ServerErrorsReducer from './server_errors_reducer';
import TextChannelErrorsReducer from './text_channel_errors_reducer';
import TextChannelMessageErrorsReducer from './text_channel_message_errors_reducer';
import DMChannelErrorsReducer from './dm_channel_errors_reducer';
import JoinServerErrorsReducer from './join_server_errors_reducer';

const ErrorReducer = combineReducers({
  session: SessionErrorsReducer,
  server: ServerErrorsReducer,
  textChannel: TextChannelErrorsReducer,
  textChannelMessage: TextChannelMessageErrorsReducer,
  dmChannel: DMChannelErrorsReducer,
  joinServer: JoinServerErrorsReducer
});

export default ErrorReducer;