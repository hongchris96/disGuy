import React from 'react';
import {Link} from 'react-router-dom';

class TextChannelMessageListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <li className="channel-list-item">
        {this.props.message}
      </li>
    );
  }
}

export default TextChannelMessageListItem;