import { connect } from 'react-redux';
import { createServerMember } from '../../actions/server/server_member_actions';
import { clearErrors } from '../../actions/session/session_actions';
import { openModal, closeModal } from '../../actions/modal/modal_actions';
import JoinServerForm from './join_server';

const mapSTP = (state) => ({
  allServers: state.entities.servers,
  allServerIds: Object.keys(state.entities.servers),
  allServerMembers: Object.keys(state.entities.serverMembers),
  errors: state.errors.joinServer,
  serverMember: {
    member_id: state.session.currentUser.id, 
    server_id: ""
  },
  formType: 'Join Server'
});

const mapDTP = dispatch => ({
  joinServer: (serverMember) => dispatch(createServerMember(serverMember)),
  openModal: (componentName) => dispatch(openModal(componentName)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(JoinServerForm);