import React from 'react';
import {Link} from 'react-router-dom';
import EditTextChannelContainer from './edit_text_channel_container';

import TextChannelListItem from './text_channel_list_items';

class TextChannelList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editVisible: false
    };

    this.openEditSetting = this.openEditSetting.bind(this);
  }

  componentDidMount(){
    this.props.requestTextChannels();
  }

  componentDidUpdate() {
    if (this.props.currentTextChannel !== undefined && this.props.currentTextChannel !== this.state.currentTextChannel) {
      this.setState({currentTextChannel: this.props.currentTextChannel});
    }
  }

  openEditSetting(e) {
    // e.preventDefault();
    this.setState(prevState => ({
      editVisible: !prevState.editVisible 
    }));
  }

  render(){
    return (
      <div className="channel-list">
        <h3>Text Channels <span onClick={() => this.props.openModal("CreateTextChannel")} className="add-text-channel">+</span></h3>
        <ul className="text-channel-list">
          {this.props.textChannels.filter(tchannel => tchannel.server_id === this.props.serverId).map(tchannel => {
            return <TextChannelListItem 
              key={tchannel.id} 
              textChannel={tchannel} 
              serverId={this.props.serverId}
              openEditSetting={this.openEditSetting}
            />
          })}
        </ul>
        <div className={`server-edit ${this.state.editVisible ? "" : "hidden"}`}>
          <EditTextChannelContainer 
            server={this.props.server} 
            serverId={this.props.serverId} 
            currentUser={this.props.currentUser} 
            channel={this.state.currentTextChannel} 
            closeEditSetting={this.openEditSetting}
            textChannelListProps={this.props}
          />
        </div>
      </div>
    );
  }
}

export default TextChannelList;