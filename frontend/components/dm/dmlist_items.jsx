import React from 'react';
import {Link} from 'react-router-dom';

class DMListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    let shortenDisplay;

    if (this.props.dmChannel.user1_id === this.props.currentUser.id) {
      shortenDisplay = 'User'.concat(" ",this.props.dmChannel.user2_id)
    } else {
      shortenDisplay = 'User'.concat(" ",this.props.dmChannel.user1_id)
    }
    // if (this.props.textChannel.text_channel_name.length > 15) {
    //   shortenDisplay = this.props.textChannel.text_channel_name.slice(0, 16).concat(" ", "...");
    // } else {
    //   shortenDisplay = this.props.textChannel.text_channel_name;
    // }

    return (
      <li className="dm-channel-list-item">
        <Link to={`/servers/@me/${this.props.dmChannel.id}`}>
          {shortenDisplay}
          <span className="close-modal" onClick={() => this.props.deleteDMChannel(this.props.dmChannel.id)}>{`\u2715`}</span>
        </Link>
      </li>
    );
  }
}

export default DMListItem;