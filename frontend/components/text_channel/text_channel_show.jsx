import React from 'react';
import TextChannelMessageListContainer from '../text_channel_message/message_list_container';

class TextChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTextChannel(this.props.match.params.textChannelId);
  }

  render(){

    if (this.props.textChannel === undefined) {
      return null;
    }

    return(
      <div className="text-channel-show">
        <nav className="text-channel-top">
          <h1>{this.props.textChannel.text_channel_name}</h1>
          <div>
            <p>?</p>
            <p>?</p>
            <p>?</p>
          </div>
        </nav>
        <div className="text-channel-body">
          <h1>CHAT ZONE</h1>
          <TextChannelMessageListContainer textChannelId={this.props.textChannel.id}/>
          <p>_____________________________</p>
          <p>Create Message Form Goes Here</p>
        </div>
      </div>
    );
  }
}

export default TextChannelShow;