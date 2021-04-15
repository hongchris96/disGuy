import { connect } from 'react-redux';
import { requestDirectMessages, deleteDirectMessage } from '../../actions/dm/direct_message_actions';
import DirectMessageList from './message_list';
import { withRouter } from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    directMessages: Object.values(state.entities.directMessages),
    currentDMChannel: state.entities.dmChannels[ownProps.location.pathname.split("/")[3]]
  }
};

const mapDTP = dispatch => ({
  requestDirectMessages: () => dispatch(requestDirectMessages()),
  deleteDirectMessage: (messageId) => dispatch(deleteDirectMessage(messageId))
});

export default withRouter(connect(mapSTP, mapDTP)(DirectMessageList));