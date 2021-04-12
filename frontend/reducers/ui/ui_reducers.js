import {combineReducers} from 'redux';

import ModalReducer from './modal_ui/modal_reducers';

const UIReducer = combineReducers({
  currentModal: ModalReducer
});

export default UIReducer;