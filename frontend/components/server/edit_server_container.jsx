import { connect } from 'react-redux';
import { requestServer, updateServer, deleteServer } from '../../actions/server/server_actions';
import { clearErrors } from '../../actions/session/session_actions';
import EditServerForm from './edit_server';

const mapSTP = (state, ownProps) => ({
  server: ownProps.server,
  errors: state.errors.server,
  formType: 'Update Server'
});

const mapDTP = dispatch => ({
  requestServer: (serverId) => dispatch(requestServer(serverId)),
  updateServer: (server) => dispatch(updateServer(server)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(EditServerForm);