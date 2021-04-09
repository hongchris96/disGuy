import { connect } from 'react-redux';
import { requestServer, updateServer } from '../../actions/server/server_actions';
import { clearErrors } from '../../actions/session/session_actions';
import EditServerForm from './edit_server';

const mapSTP = (state, ownProps) => ({
  // errors: state.errors.server,
  server: state.entities.servers[ownProps.match.params.serverId],
  formType: 'Update Server'
});

const mapDTP = dispatch => ({
  requestServer: (serverId) => dispatch(requestServer(serverId)),
  updateServer: (server) => dispatch(updateServer(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(EditServerForm);