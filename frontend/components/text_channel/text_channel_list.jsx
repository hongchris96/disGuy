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
      <ul className="text-channel-list">
        {this.props.textChannels.filter(tchannel => tchannel.server_id === this.props.serverId).map(tchannel => {
          return <TextChannelListItem key={tchannel.id} textChannel={tchannel}/>
        })}
      </ul>
    );
  }
}

export default TextChannelList;