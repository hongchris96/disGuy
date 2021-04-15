import { connect } from 'react-redux';
import { requestServers } from '../../actions/server/server_actions';
import { requestUsers } from '../../actions/user/user_actions';
import { openModal } from '../../actions/modal/modal_actions';
import ServerList from './server_list';

const mapSTP = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDTP = dispatch => ({
  requestServers: () => dispatch(requestServers()),
  requestUsers: () => dispatch(requestUsers()),
  openModal: (componentName) => dispatch(openModal(componentName))
});

export default connect(mapSTP, mapDTP)(ServerList);

