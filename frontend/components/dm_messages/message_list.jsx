import React from 'react';
import {Link} from 'react-router-dom';
// import EditTextChannelContainer from './edit_text_channel_container';

import DirectMessageListItem from './message_list_items';

class DirectMessageList extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestDirectMessages();
  }

  render(){

    let messagesContent;
    let currentChannelMessageArray = this.props.directMessages.filter(message => message.channel_id === this.props.dmChannelId);

    messagesContent = <ul className="text-channel-message-list">
      {currentChannelMessageArray.map(message => {
      return <DirectMessageListItem 
        key={message.id}
        message={message}
        currentUser={this.props.currentUser}
        deleteMessage={this.props.deleteDirectMessage}
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

export default DirectMessageList;