import React from 'react';
import {Link} from 'react-router-dom';
// import EditTextChannelContainer from './edit_text_channel_container';

import TextChannelMessageListItem from './message_list_item';

class TextChannelMessageList extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   editVisible: false
    // };

    // this.openEditSetting = this.openEditSetting.bind(this);
  }

  componentDidMount(){
    this.props.requestTextChannelMessages();
  }

  // componentDidUpdate() {
  //   if (this.props.currentTextChannel !== undefined && this.props.currentTextChannel !== this.state.currentTextChannel) {
  //     this.setState({currentTextChannel: this.props.currentTextChannel});
  //   }
  // }

  // openEditSetting(e) {
  //   // e.preventDefault();
  //   this.setState(prevState => ({
  //     editVisible: !prevState.editVisible 
  //   }));
  // }

  render(){

    let messagesContent;
    let currentChannelMessageArray = this.props.textChannelMessages.filter(message => message.channel_id === this.props.textChannelId);

    if (currentChannelMessageArray.length === 0) messagesContent = <h1 className="chat-placeholder">"CHAT ZONE"</h1>
    else messagesContent = <ul className="text-channel-message-list">
      {currentChannelMessageArray.map(message => {
      return <TextChannelMessageListItem 
        key={message.id}
        message={message}
        currentUser={this.props.currentUser}
        // textChannel={tchannel} 
        // serverId={this.props.serverId}
        // openEditSetting={this.openEditSetting}
      />
    })}
    </ul>;

    return (
      <div className="messages-content">
        {messagesContent}
        {/* <div className={`server-edit ${this.state.editVisible ? "" : "hidden"}`}>
          <EditTextChannelContainer 
            serverId={this.props.serverId} 
            channel={this.state.currentTextChannel} 
            closeEditSetting={this.openEditSetting}
            textChannelListProps={this.props}
          />
        </div> */}
      </div>
    );
  }
}

export default TextChannelMessageList;