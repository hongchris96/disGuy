import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ServerErrorsReducer from './server_errors_reducer';

const ErrorReducer = combineReducers({
  session: SessionErrorsReducer,
  server: ServerErrorsReducer
});

export default ErrorReducer;