import React from 'react';
import TextChannelMessageListContainer from '../text_channel_message/message_list_container';
import CreateTextChannelMessageContainer from '../text_channel_message/create_message_container';
import {faGithub, faLinkedin, faAngellist} from "@fortawesome/free-brands-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class TextChannelShow extends React.Component {
  constructor(props) {
    super(props);

    // Action Cable Stuff
    this.state = {messages: []};
    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.props.requestTextChannel(this.props.match.params.textChannelId);
    this.props.closeModal();
    // Action Cable Stuff
    App.cable.subscriptions.create(
      // this is client-side counterpart of chat_channel.rb( ChatChannel Class )

      // First Arg: Channel, invoke and create subscription once, subscription persist
      { channel: "ChatChannel", id: this.props.match.params.textChannelId, type: 'text_channel'},
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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.textChannelId !== prevProps.match.params.textChannelId){
      this.props.closeModal();
      App.cable.subscriptions.create(
        { channel: "ChatChannel", id: this.props.match.params.textChannelId, type: 'text_channel'},
        {
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
  }

  render(){

    if (this.props.textChannel === undefined) {
      return null;
    }

    return(
      <div className="text-channel-show">
        <nav className="text-channel-top">
          <h1>{this.props.textChannel.text_channel_name}</h1>
          <ul>
            <a href="https://hongchris96.com/" target="_blank"><FontAwesomeIcon icon={faUser}/></a>
            <a href="https://github.com/hongchris96/disGuy" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/chen-wei-christopher-hong-4b189162/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://angel.co/u/chen-wei-christopher-hong" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a>
          </ul>
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