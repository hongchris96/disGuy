import React from 'react';
import {Link} from 'react-router-dom';

import ServerListItem from './server_list_items';

class ServerList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestServers();
  }

  render(){
    return (
      <div className="server-sidebar">
        <ul className="server-list">
          {/* <li> Link to home with direct message lists */}
          <li>Home</li>
          <li>____</li>

          {this.props.servers.map(server => {
            return (<ServerListItem 
              key={server.id} 
              server={server}
            />);
          })}

          {/* <li> Click to add server to list,
          leads to modal to join server or create server */}
          <li>+</li>
        </ul>
      </div>
    );
  }
}

export default ServerList;