import { connect } from 'react-redux';
import { requestServers } from '../../actions/server/server_actions';
import ServerList from './server_list';

const mapSTP = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDTP = dispatch => ({
  requestServers: () => dispatch(requestServers)
});

export default connect(mapSTP, mapDTP)(ServerList);

