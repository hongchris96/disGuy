import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session/session_actions';
import { createDirectMessage } from '../../actions/dm/direct_message_actions';
import CreateDirectMessageForm from './create_message';

const mapSTP = (state, ownProps) => {
  return ({
    // errors: state.errors.directMessage,
    directMessage: {
      author_id: state.session.currentUser.id,
      channel_id: ownProps.location.pathname.split("/")[3],
      chat_content: ""
    }
  })
};

const mapDTP = dispatch => ({
  createDirectMessage: (message) => dispatch(createDirectMessage(message)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapSTP, mapDTP)(CreateDirectMessageForm));