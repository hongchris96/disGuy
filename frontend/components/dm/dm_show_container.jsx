import { connect } from 'react-redux';
import { requestDMChannel } from '../../actions/dm/dm_channel_actions';
import { receiveDirectMessage, removeDirectMessage } from '../../actions/dm/direct_message_actions';
import DMChannelShow from './dm_show';

const mapSTP = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    dmChannel: state.entities.dmChannels[ownProps.match.params.dmChannelId]
  })
};

const mapDTP = dispatch => ({
  receiveDirectMessage: (message) => dispatch(receiveDirectMessage(message)),
  removeDirectMessage: (messageId) => dispatch(removeDirectMessage(messageId)),
  requestDMChannel: (dmChannelId) => dispatch(requestDMChannel(dmChannelId))
});

export default connect(mapSTP, mapDTP)(DMChannelShow);