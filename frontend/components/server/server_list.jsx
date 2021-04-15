import React from 'react';
import {Link} from 'react-router-dom';

import ServerListItem from './server_list_items';

class ServerList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestServers();
    this.props.requestUsers();
  }

  render(){
    return (
      <div className="server-sidebar">
        <ul className="server-list">
          {/* <li> Link to home with direct message lists */}
          <li><Link to="/servers/@me"><img src={houseURL}/></Link></li>
          <li> </li>

          {this.props.servers.map(server => {
            return (<ServerListItem 
              key={server.id} 
              server={server}
            />);
          })}

          {/* <li> Click to add server to list,
          leads to modal to join server or create server */}
          <li className="add-server" onClick={() => this.props.openModal("AddNewServer")}>+</li>
        </ul>
      </div>
    );
  }
}

export default ServerList;