import React from 'react';
import {Link} from 'react-router-dom';

class DMListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    let shortenDisplay;

    if (this.props.dmChannel.user1_id === this.props.currentUser.id) {
      shortenDisplay = this.props.allUsers.filter(user => user.id === this.props.dmChannel.user2_id)[0].username
    } else {
      shortenDisplay = this.props.allUsers.filter(user => user.id === this.props.dmChannel.user1_id)[0].username
    }

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