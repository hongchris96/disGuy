import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ServerErrorsReducer from './server_errors_reducer';
import TextChannelErrorsReducer from './text_channel_errors_reducer';

const ErrorReducer = combineReducers({
  session: SessionErrorsReducer,
  server: ServerErrorsReducer,
  textChannel: TextChannelErrorsReducer
});

export default ErrorReducer;