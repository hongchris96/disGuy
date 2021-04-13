import React from 'react';
import {Link} from 'react-router-dom';

class TextChannelMessageListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let author;
    if (this.props.message.author_id === this.props.currentUser.id) {
      author = this.props.currentUser.username.split(" ")[1].slice(0, 7).concat(" ", ":");
    } else {
      author = "User".concat(" ", this.props.message.author_id, " ", ":");
    }

    return (
      <li className="channel-list-item">
        {/* maybe author name but then needs user index in controller */}
        <p>{author}</p>
        <p>{this.props.message.chat_content}</p>
      </li>
    );
  }
}

export default TextChannelMessageListItem;