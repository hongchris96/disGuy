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
        {/* text channel map */}
      </ul>
    );
  }
}

export default TextChannelList;