import { connect } from 'react-redux';
import { requestServers, requestServer, updateServer, deleteServer } from '../../actions/server/server_actions';
import { requestServerMembers, deleteServerMember } from '../../actions/server/server_member_actions';
import { openModal, closeModal } from '../../actions/modal/modal_actions';
import { clearErrors } from '../../actions/session/session_actions';
import ServerShow from './server_show';

const mapSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  allServerMembers: Object.values(state.entities.serverMembers),
  currentUser: state.session.currentUser
});

const mapDTP = dispatch => ({
  requestServers: () => dispatch(requestServers()),
  requestServer: (serverId) => dispatch(requestServer(serverId)),
  updateServer: (server) => dispatch(updateServer(server)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId)),
  requestServerMembers: () => dispatch(requestServerMembers()),
  leaveServer: (serverMemberId) => dispatch(deleteServerMember(serverMemberId)),
  openModal: (componentName) => dispatch(openModal(componentName)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(ServerShow);