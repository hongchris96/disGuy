import { connect } from 'react-redux';
import { requestTextChannel, updateTextChannel, deleteTextChannel } from '../../actions/text_channel/text_channel_actions';
import { clearErrors } from '../../actions/session/session_actions';
import EditTextChannelForm from './edit_text_channel';

const mapSTP = (state, ownProps) => ({
  errors: state.errors.server
});

const mapDTP = dispatch => ({
  requestTextChannel: (textChannelId) => dispatch(requestTextChannel(textChannelId)),
  updateTextChannel: (textChannel) => dispatch(updateTextChannel(textChannel)),
  deleteTextChannel: (textChannelId) => dispatch(deleteTextChannel(textChannelId)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(EditTextChannelForm);