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
    return (
      <div>
        <ul className="text-channel-message-list">
          {this.props.textChannelMessages.filter(message => message.channel_id === this.props.textChannelId).map(message => {
            return <TextChannelMessageListItem 
              key={message.id}
              message={message}
              // textChannel={tchannel} 
              // serverId={this.props.serverId}
              // openEditSetting={this.openEditSetting}
            />
          })}
        </ul>
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