import React from 'react';
import {Link} from 'react-router-dom';

class TextChannelListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    let shortenDisplay;
    if (this.props.textChannel.text_channel_name.length > 15) {
      shortenDisplay = this.props.textChannel.text_channel_name.slice(0, 16).concat(" ", "...");
    } else {
      shortenDisplay = this.props.textChannel.text_channel_name;
    }

    return (
      <li className="channel-list-item">
        <Link to={`/servers/${this.props.serverId}/${this.props.textChannel.id}`}>
          <span># </span>
          {shortenDisplay}
          <img src={window.cogURL} onClick={this.props.openEditSetting}/>
        </Link>
      </li>
    );
  }
}

export default TextChannelListItem;