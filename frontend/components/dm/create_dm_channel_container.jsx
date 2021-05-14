import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session/session_actions';
import { closeModal } from '../../actions/modal/modal_actions';
import { withRouter } from 'react-router-dom';
import { createDMChannel } from '../../actions/dm/dm_channel_actions';
import { requestUsers } from '../../actions/user/user_actions';
import CreateDMChannelForm from './create_dm_channel';

const mapSTP = (state, ownProps) => {
  return ({
    allOtherUsers: Object.values(state.entities.users).filter(ele => ele.id !== state.session.currentUser.id),
    allDMChannels: Object.values(state.entities.dmChannels),
    currentModal: state.ui.currentModal,
    dmChannel: {
      user1_id: state.session.currentUser.id,
      user2_id: ''
    },
    errors: state.errors.dmChannel
  })
};

const mapDTP = dispatch => ({
  createDMChannel: (dmChannel) => dispatch(createDMChannel(dmChannel)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
  requestUsers: () => dispatch(requestUsers())
});

export default withRouter(connect(mapSTP, mapDTP)(CreateDMChannelForm));