import React from 'react';
import {Link} from 'react-router-dom';

class TextChannelListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className="channel-list-item">
        {/* Link to textChannel */}
        <span># </span>
        {this.props.textChannel.text_channel_name}
      </li>
    );
  }
}

export default TextChannelListItem;