import React from 'react';
import {Link} from 'react-router-dom';

class ServerListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const shortenDisplay = this.props.server.server_name.slice(0, 4);

    return (
      <li className="server-list-icon">
        <Link to={`/servers/${this.props.server.id}`}>{shortenDisplay}</Link>
        {/* {shortenDisplay} */}
      </li>
    );
  }
}

export default ServerListItem;