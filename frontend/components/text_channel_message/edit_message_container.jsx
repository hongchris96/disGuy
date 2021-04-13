import { connect } from 'react-redux';
import { updateTextChannelMessage } from '../../actions/text_channel/text_channel_message_actions';
import { clearErrors } from '../../actions/session/session_actions';
import EditTextChannelMessageForm from './edit_message';

const mapSTP = (state, ownProps) => ({
  errors: state.errors.textChannel
});

const mapDTP = dispatch => ({
  updateTextChannelMessage: (message) => dispatch(updateTextChannelMessage(message)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(EditTextChannelMessageForm);