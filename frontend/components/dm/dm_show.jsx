import React from 'react';
// import DMMessageListContainer from '../text_channel_message/message_list_container';
// import CreateDirectMessageContainer from '../text_channel_message/create_message_container';

class DMChannelShow extends React.Component {
  constructor(props) {
    super(props);

    // Action Cable Stuff
    // this.state = {messages: []};
    // this.bottom = React.createRef();
  }

  componentDidMount() {
    this.props.requestDMChannel(this.props.match.params.dmChannelId);

    // Action Cable Stuff
    // App.cable.subscriptions.create(
    //   // this is client-side counterpart of chat_channel.rb( ChatChannel Class )

    //   // First Arg: Channel, invoke and create subscription once, subscription persist
    //   { channel: "ChatChannel" },
    //   {
    //     // Second Arg: Received, invoked when broadcast method (backend) transmit data into Channel stream
    //     received: data => {
    //       switch (data.type) {
    //         case "message":
    //           this.props.receiveTextChannelMessage(data.message);
    //           break;
    //         case "no_message":
    //           this.props.removeTextChannelMessage(data.message.id);
    //           break;
    //         case "inaction":
    //           break;
    //       }
    //     },
    //     // Third Arg: Speak, sends data to backend, invoke speak method (ChatChannel Class)
    //     speak: function(data) {
    //       return this.perform("speak", data);
    //     },
    //     update: function(data) {
    //       return this.perform("update", data);
    //     },
    //     poof: function(data) {
    //       return this.perform("poof", data);
    //     }
    //   }
    // );
  }

  render(){

    if (this.props.dmChannel === undefined) {
      return null;
    }

    let shortenDisplay;

    if (this.props.dmChannel.user1_id === this.props.currentUser.id) {
      shortenDisplay = 'User'.concat(" ",this.props.dmChannel.user2_id)
    } else {
      shortenDisplay = 'User'.concat(" ",this.props.dmChannel.user1_id)
    }

    return(
      <div className="text-channel-show">
        <nav className="text-channel-top">
          <h1>{shortenDisplay}</h1>
          <div>
            <p>?</p>
            <p>?</p>
            <p>?</p>
          </div>
        </nav>

        <div className="text-channel-body">
          {/* <DMMessageListContainer dmChannelId={this.props.dmChannel.id}/> */}
          <p>All messages here</p>
          {/* <CreateDirectMessageContainer /> */}
          <p>Type your message here</p>
        </div>
      </div>
    );
  }
}

export default DMChannelShow;