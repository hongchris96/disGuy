import React from 'react';
import {Link} from 'react-router-dom';
import EditDirectMessageContainer from './edit_message_container';

class DirectMessageListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messageSettingVis: false,
      editMessageVis: false
    };

    this.openEditMessage = this.openEditMessage.bind(this);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({ messageSettingVis: true });
  }
  
  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({ messageSettingVis: false });
  }

  handleDelete(e) {
    e.preventDefault();
    // this.props.deleteMessage(this.props.message.id);
    App.cable.subscriptions.subscriptions[0].poof2({ message: this.props.message,  currentUser: this.props.currentUser});
  }

  openEditMessage(e) {
    // e.preventDefault();
    if (this.props.message.author_id === this.props.currentUser.id) {
      this.setState(prevState => ({
        editMessageVis: !prevState.editMessageVis 
      }));
    }
  }

  render(){
    let author;
    let nameParts;
    if (this.props.message.author_id === this.props.currentUser.id) {
      nameParts = this.props.currentUser.username.split(" ");
      author = nameParts[nameParts.length-1].slice(0, 7).concat(" ", ":");
    } else {
      author = "User".concat(" ", this.props.message.author_id, " ", ":");
    }

    return (
      <li className="message-list-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {/* maybe author name but then needs user index in controller */}
        <p>{author}</p>
        <p>{this.props.message.chat_content}</p>
        <div className={`edit-message ${this.state.editMessageVis ? "" : "hidden"}`}>
          <EditDirectMessageContainer 
            message={this.props.message} 
            closeEditMessage={this.openEditMessage}
          />
        </div>
        <div className={`message-settings ${this.state.messageSettingVis ? "" : "hidden"}`}>
          <p onClick={this.openEditMessage}><img src={window.editURL}/></p>
          <p onClick={this.handleDelete}><img src={window.trashURL}/></p>
        </div>
      </li>
    );
  }
}

export default DirectMessageListItem;