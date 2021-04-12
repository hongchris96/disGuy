import React from 'react';
import {Link} from 'react-router-dom';

class TextChannelListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className="channel-list-item">
        <Link to={`/servers/${this.props.serverId}/${this.props.textChannel.id}`}>
          <span># </span>
          {this.props.textChannel.text_channel_name}
        </Link>
      </li>
    );
  }
}

export default TextChannelListItem;