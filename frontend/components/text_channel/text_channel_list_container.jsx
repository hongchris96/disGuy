import { connect } from 'react-redux';
import { requestTextChannels } from '../../actions/text_channel/text_channel_actions';
import { openModal } from '../../actions/modal/modal_actions';
import TextChannelList from './text_channel_list';
import { withRouter } from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  return {
    textChannels: Object.values(state.entities.textChannels),
    currentTextChannel: state.entities.textChannels[ownProps.location.pathname.split("/")[3]]
  }
};

const mapDTP = dispatch => ({
  requestTextChannels: () => dispatch(requestTextChannels()),
  openModal: (componentName) => dispatch(openModal(componentName))
});

export default withRouter(connect(mapSTP, mapDTP)(TextChannelList));