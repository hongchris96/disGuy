import React from 'react';
import {connect} from 'react-redux';
import { openModal, closeModal } from '../../actions/modal/modal_actions';
import AddNewServer from './add_new_server';

const mapSTP = state => ({
  nothing: 'nothing'
});

const mapDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: (componentName) => dispatch(openModal(componentName))
});

export default connect(mapSTP, mapDTP)(AddNewServer);

