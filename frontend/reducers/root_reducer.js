import {combineReducers} from 'redux';
// import EntitiesReducer from './entities/entities_reducer';
import SessionReducer from './session/session_reducer';
import ErrorReducer from './errors/errors_reducer';

const RootReducer = combineReducers({
  // entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorReducer
});

export default RootReducer;