import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/session/session_actions';
import CreateTextChannelMessageForm from './create_message';

const mapSTP = (state, ownProps) => {
  return ({
    // allTextChannelIds: Object.keys(state.entities.textChannels),
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