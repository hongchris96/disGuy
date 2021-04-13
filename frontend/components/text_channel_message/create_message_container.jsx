import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session/session_actions';
import { createTextChannelMessage } from '../../actions/text_channel/text_channel_message_actions';
import CreateTextChannelMessageForm from './create_message';

const mapSTP = (state, ownProps) => {
  return ({
    errors: state.errors.textChannelMessage,
    textChannelMessage: {
      author_id: state.session.currentUser.id,
      channel_id: ownProps.location.pathname.split("/")[3],
      chat_content: ""
    }
  })
};

const mapDTP = dispatch => ({
  createTextChannelMessage: (message) => dispatch(createTextChannelMessage(message)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapSTP, mapDTP)(CreateTextChannelMessageForm));