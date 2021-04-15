import React from 'react';
import {Link} from 'react-router-dom';
// import EditTextChannelContainer from './edit_text_channel_container';

import TextChannelMessageListItem from './message_list_item';

class TextChannelMessageList extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestTextChannelMessages();
  }

  render(){

    let messagesContent;
    let currentChannelMessageArray = this.props.textChannelMessages.filter(message => message.channel_id === this.props.textChannelId);

    messagesContent = <ul className="text-channel-message-list">
      {currentChannelMessageArray.map(message => {
      return <TextChannelMessageListItem 
        key={message.id}
        message={message}
        allUsers={this.props.allUsers}
        currentUser={this.props.currentUser}
        deleteMessage={this.props.deleteTextChannelMessage}
      />
    })}
    </ul>;

    return (
      <div className="messages-content">
        {messagesContent}
      </div>
    );
  }
}

export default TextChannelMessageList;