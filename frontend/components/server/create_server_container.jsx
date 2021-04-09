import { connect } from 'react-redux';
import { createServer } from '../../actions/server/server_actions';
import { clearErrors } from '../../actions/session/session_actions';
import CreateServerForm from './create_server';

const mapSTP = state => ({
  // errors: state.errors.server,
  server: {server_name: `${state.session.currentUser.username}'s server`},
  formType: 'Create Server'
});

const mapDTP = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(CreateServerForm);