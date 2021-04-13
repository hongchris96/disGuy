import React from 'react';
import TextChannelMessageListContainer from '../text_channel_message/message_list_container';
import CreateTextChannelMessageContainer from '../text_channel_message/create_message_container';

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
          <TextChannelMessageListContainer textChannelId={this.props.textChannel.id}/>
          {/* <p>Create Message Form Goes Here</p> */}
          <CreateTextChannelMessageContainer />
        </div>
      </div>
    );
  }
}

export default TextChannelShow;