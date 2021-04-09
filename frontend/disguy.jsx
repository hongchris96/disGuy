import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import {openModal, closeModal} from "./actions/modal/modal_actions"
// import ModalReducer from './reducers/ui/modal_ui/modal_reducers'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {currentUser: window.currentUser}
    };
  }

  const store = configureStore(preloadedState);

  // testing
  window.store = store;
  // window.openModal = openModal;
  // window.closeModal = closeModal;
  // window.ModalReducer = ModalReducer;

  ReactDOM.render(<Root store={store}/>, root);
});