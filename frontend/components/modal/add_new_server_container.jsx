import React from 'react';
import {connect} from 'react-redux';
import { openModal, closeModal } from '../../actions/modal/modal_actions';
import AddNewServer from './add_new_server';

const mapDTP = dispatch => ({
  closeModal: (componentName) => dispatch(closeModal(componentName)),
  openModal: (componentName) => dispatch(openModal(componentName))
});

export default connect(null, mapDTP)(AddNewServer);

