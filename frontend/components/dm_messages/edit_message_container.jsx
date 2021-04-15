import { connect } from 'react-redux';
import { updateDirectMessage } from '../../actions/dm/direct_message_actions';
import { clearErrors } from '../../actions/session/session_actions';
import EditDirectMessageForm from './edit_message';

const mapSTP = (state, ownProps) => ({
  // errors: state.errors.dmChannel
});

const mapDTP = dispatch => ({
  updateDirectMessage: (message) => dispatch(updateDirectMessage(message)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(EditDirectMessageForm);