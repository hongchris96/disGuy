import { connect } from 'react-redux';
import { requestDMChannels, deleteDMChannel } from '../../actions/dm/dm_channel_actions';
import { openModal } from '../../actions/modal/modal_actions';
import DMChannelList from './dmlist';
import { withRouter } from 'react-router-dom';
import { requestUsers } from '../../actions/user/user_actions';

const mapSTP = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    allUsers: Object.values(state.entities.users),
    dmChannels: Object.values(state.entities.dmChannels),
    currentDMChannel: state.entities.dmChannels[ownProps.location.pathname.split("/")[2]]
  }
};

const mapDTP = dispatch => ({
  requestDMChannels: () => dispatch(requestDMChannels()),
  deleteDMChannel: (dmChannelId) => dispatch(deleteDMChannel(dmChannelId)),
  openModal: (componentName) => dispatch(openModal(componentName))
});

export default withRouter(connect(mapSTP, mapDTP)(DMChannelList));