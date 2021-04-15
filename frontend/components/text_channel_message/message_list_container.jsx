import { connect } from 'react-redux';
import { requestTextChannelMessages, deleteTextChannelMessage } from '../../actions/text_channel/text_channel_message_actions';
import TextChannelMessageList from './message_list';
import { withRouter } from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    allUsers: Object.values(state.entities.users),
    textChannelMessages: Object.values(state.entities.textChannelMessages),
    currentTextChannel: state.entities.textChannels[ownProps.location.pathname.split("/")[3]]
  }
};

const mapDTP = dispatch => ({
  requestTextChannelMessages: () => dispatch(requestTextChannelMessages()),
  deleteTextChannelMessage: (messageId) => dispatch(deleteTextChannelMessage(messageId))
});

export default withRouter(connect(mapSTP, mapDTP)(TextChannelMessageList));