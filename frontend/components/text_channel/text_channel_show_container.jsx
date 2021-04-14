import { connect } from 'react-redux';
import { requestTextChannel } from '../../actions/text_channel/text_channel_actions';
import { receiveTextChannelMessage, removeTextChannelMessage } from '../../actions/text_channel/text_channel_message_actions';
import TextChannelShow from './text_channel_show';

const mapSTP = (state, ownProps) => {
  return ({
    textChannel: state.entities.textChannels[ownProps.match.params.textChannelId]
  })
};

const mapDTP = dispatch => ({
  receiveTextChannelMessage: (message) => dispatch(receiveTextChannelMessage(message)),
  removeTextChannelMessage: (messageId) => dispatch(removeTextChannelMessage(messageId)),
  requestTextChannel: (textChannelId) => dispatch(requestTextChannel(textChannelId))
});

export default connect(mapSTP, mapDTP)(TextChannelShow);