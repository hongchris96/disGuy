import { connect } from 'react-redux';
import { createTextChannel } from '../../actions/text_channel/text_channel_actions';
import { clearErrors } from '../../actions/session/session_actions';
import { closeModal } from '../../actions/modal/modal_actions';
import CreateTextChannelForm from './create_text_channel';

const mapSTP = (state, ownProps) => ({
  // allTextChannelIds: Object.keys(state.entities.textChannels), // for redirecting after create
  errors: state.errors.textChannel,
  textChannel: {
    // server_id: ownProps.match.params.serverId, 
    text_channel_name: ""
  }
});

const mapDTP = dispatch => ({
  createTextChannel: (textChannel) => dispatch(createTextChannel(textChannel)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(CreateTextChannelForm);