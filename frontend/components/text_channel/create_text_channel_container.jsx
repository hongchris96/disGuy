import { connect } from 'react-redux';
import { createTextChannel } from '../../actions/text_channel/text_channel_actions';
import { clearErrors } from '../../actions/session/session_actions';
import { closeModal } from '../../actions/modal/modal_actions';
import { withRouter } from 'react-router-dom';
import CreateTextChannelForm from './create_text_channel';

const mapSTP = (state, ownProps) => {
  return ({
    allTextChannelIds: Object.keys(state.entities.textChannels),
    errors: state.errors.textChannel,
    textChannel: {
      server_id: ownProps.location.pathname.split("/")[2],
      text_channel_name: ""
    }
  })
};

const mapDTP = dispatch => ({
  createTextChannel: (textChannel) => dispatch(createTextChannel(textChannel)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapSTP, mapDTP)(CreateTextChannelForm));