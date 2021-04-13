import { connect } from 'react-redux';
import { requestTextChannelMessages } from '../../actions/text_channel/text_channel_message_actions';
import TextChannelMessageList from './message_list';
import { withRouter } from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  return {
    textChannelMessages: Object.values(state.entities.textChannelMessages),
    currentTextChannel: state.entities.textChannels[ownProps.location.pathname.split("/")[3]]
  }
};

const mapDTP = dispatch => ({
  requestTextChannelMessages: () => dispatch(requestTextChannelMessages())
});

export default withRouter(connect(mapSTP, mapDTP)(TextChannelMessageList));