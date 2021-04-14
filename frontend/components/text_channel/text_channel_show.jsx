import React from 'react';
import TextChannelMessageListContainer from '../text_channel_message/message_list_container';
import CreateTextChannelMessageContainer from '../text_channel_message/create_message_container';

class TextChannelShow extends React.Component {
  constructor(props) {
    super(props);

    // Action Cable Stuff
    this.state = {messages: []};
    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.props.requestTextChannel(this.props.match.params.textChannelId);

    // Action Cable Stuff
    App.cable.subscriptions.create(
      // this is client-side counterpart of chat_channel.rb( ChatChannel Class )

      // First Arg: Channel, invoke and create subscription once, subscription persist
      { channel: "ChatChannel" },
      {
        // Second Arg: Received, invoked when broadcast method (backend) transmit data into Channel stream
        received: data => {
          switch (data.type) {
            case "message":
              this.props.receiveTextChannelMessage(data.message);
              break;
            case "no_message":
              this.props.removeTextChannelMessage(data.message.id);
              break;
            case "inaction":
              break;
          }
        },
        // Third Arg: Speak, sends data to backend, invoke speak method (ChatChannel Class)
        speak: function(data) {
          return this.perform("speak", data);
        },
        update: function(data) {
          return this.perform("update", data);
        },
        poof: function(data) {
          return this.perform("poof", data);
        }
      }
    );
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
          <CreateTextChannelMessageContainer />
        </div>
      </div>
    );
  }
}

export default TextChannelShow;