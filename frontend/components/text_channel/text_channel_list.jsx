import React from 'react';
import {Link} from 'react-router-dom';

import TextChannelListItem from './text_channel_list_items';

class TextChannelList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestTextChannels();
  }

  render(){
    return (
      <div className="channel-list">
        <h3>Text Channels <span onClick={() => this.props.openModal("CreateTextChannel")}className="add-text-channel">+</span></h3>
        <ul className="text-channel-list">
          {this.props.textChannels.filter(tchannel => tchannel.server_id === this.props.serverId).map(tchannel => {
            return <TextChannelListItem key={tchannel.id} textChannel={tchannel} serverId={this.props.serverId}/>
          })}
        </ul>
      </div>
    );
  }
}

export default TextChannelList;