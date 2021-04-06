import EntitiesReducer from './entities/entities_reducer';
import SessionReducer from './session/session_reducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer
});

export default RootReducer;