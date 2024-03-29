import React from 'react';
import DMMessageListContainer from '../dm_messages/message_list_container';
import CreateDirectMessageContainer from '../dm_messages/create_message_container';
import {faGithub, faLinkedin, faAngellist} from "@fortawesome/free-brands-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class DMChannelShow extends React.Component {
  constructor(props) {
    super(props);

    // Action Cable Stuff
    this.state = {messages: []};
    this.bottom = React.createRef();
  }

  componentDidMount() {
    if (this.props.allUsers.length === 0) {
      this.props.requestUsers();
    }
    this.props.requestDMChannel(this.props.match.params.dmChannelId);
    this.props.closeModal();
    // Action Cable Stuff
    App.cable.subscriptions.create(
      // this is client-side counterpart of chat_channel.rb( ChatChannel Class )

      // First Arg: Channel, invoke and create subscription once, subscription persist
      { channel: "ChatChannel", id: this.props.match.params.dmChannelId, type: 'dm' },
      {
        // Second Arg: Received, invoked when broadcast method (backend) transmit data into Channel stream
        received: data => {
          switch (data.type) {
            case "message":
              this.props.receiveDirectMessage(data.message);
              break;
            case "no_message":
              this.props.removeDirectMessage(data.message.id);
              break;
            case "inaction":
              break;
          }
        },
        // Third Arg: Speak, sends data to backend, invoke speak method (ChatChannel Class)
        speak2: function(data) {
          return this.perform("speak2", data);
        },
        update2: function(data) {
          return this.perform("update2", data);
        },
        poof2: function(data) {
          return this.perform("poof2", data);
        }
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.dmChannelId !== prevProps.match.params.dmChannelId){
      this.props.closeModal();
      App.cable.subscriptions.create(
        { channel: "ChatChannel", id: this.props.match.params.dmChannelId, type: 'dm' },
        {
          received: data => {
            switch (data.type) {
              case "message":
                this.props.receiveDirectMessage(data.message);
                break;
              case "no_message":
                this.props.removeDirectMessage(data.message.id);
                break;
              case "inaction":
                break;
            }
          },
          speak2: function(data) {
            return this.perform("speak2", data);
          },
          update2: function(data) {
            return this.perform("update2", data);
          },
          poof2: function(data) {
            return this.perform("poof2", data);
          }
        }
      );
    }
  }

  render(){

    if (this.props.dmChannel === undefined) {
      return null;
    }

    let shortenDisplay;

    if (this.props.dmChannel.user1_id === this.props.currentUser.id) {
      shortenDisplay = this.props.allUsers.filter(user => user.id === this.props.dmChannel.user2_id)[0].username
    } else {
      shortenDisplay = this.props.allUsers.filter(user => user.id === this.props.dmChannel.user1_id)[0].username
    }

    return(
      <div className="text-channel-show">
        <nav className="text-channel-top">
          <h1>{shortenDisplay}</h1>
          <ul>
            <a href="https://hongchris96.com/" target="_blank"><FontAwesomeIcon icon={faUser}/></a>
            <a href="https://github.com/hongchris96/disGuy" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/chen-wei-christopher-hong-4b189162/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://angel.co/u/chen-wei-christopher-hong" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a>
          </ul>
        </nav>

        <div className="text-channel-body">
          <DMMessageListContainer dmChannelId={this.props.dmChannel.id}/>
          <CreateDirectMessageContainer />
        </div>
      </div>
    );
  }
}

export default DMChannelShow;