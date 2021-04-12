import { connect } from 'react-redux';
import { requestTextChannels } from '../../actions/text_channel/text_channel_actions';
import { openModal } from '../../actions/modal/modal_actions';
import TextChannelList from './text_channel_list';

const mapSTP = state => ({
  textChannels: Object.values(state.entities.textChannels)
});

const mapDTP = dispatch => ({
  requestTextChannels: () => dispatch(requestTextChannels()),
  openModal: (componentName) => dispatch(openModal(componentName))
});

export default connect(mapSTP, mapDTP)(TextChannelList);