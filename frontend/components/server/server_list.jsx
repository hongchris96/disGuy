import React from 'react';
import {Link} from 'react-router-dom';

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
        <div>Some Text</div>
        <ul>
          {/* <li> Link to home with direct message lists */}

          {this.props.servers.map(server => {
            return <ServerListItem 
              key={server.id} 
              server={server}
            />
          })}

          {/* <li> Click to add server to list,
          leads to modal to join server or create server */}
        </ul>
      </div>
    );
  }
}

export default ServerList;