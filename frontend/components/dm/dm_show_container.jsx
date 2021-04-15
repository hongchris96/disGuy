import { connect } from 'react-redux';
import { requestDMChannel } from '../../actions/dm/dm_channel_actions';
import { receiveDirectMessage, removeDirectMessage } from '../../actions/dm/direct_message_actions';
import DMChannelShow from './dm_show';
import { requestUsers } from '../../actions/user/user_actions';

const mapSTP = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    allUsers: Object.values(state.entities.users),
    dmChannel: state.entities.dmChannels[ownProps.match.params.dmChannelId]
  })
};

const mapDTP = dispatch => ({
  receiveDirectMessage: (message) => dispatch(receiveDirectMessage(message)),
  removeDirectMessage: (messageId) => dispatch(removeDirectMessage(messageId)),
  requestDMChannel: (dmChannelId) => dispatch(requestDMChannel(dmChannelId)),
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mapSTP, mapDTP)(DMChannelShow);