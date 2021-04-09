import { connect } from 'react-redux';
import { createServer } from '../../actions/server/server_actions';
import { clearErrors } from '../../actions/session/session_actions';
import { openModal, closeModal } from '../../actions/modal/modal_actions';
import CreateServerForm from './create_server';

const mapSTP = (state) => ({
  allServerIds: Object.keys(state.entities.servers),
  errors: state.errors.server,
  server: {
    host_id: state.session.currentUser.id, 
    server_name: `${state.session.currentUser.username}'s server`
  },
  formType: 'Create Server'
});

const mapDTP = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  openModal: (componentName) => dispatch(openModal(componentName)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(CreateServerForm);