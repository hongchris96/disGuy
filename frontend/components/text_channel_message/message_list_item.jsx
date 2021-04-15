import React from 'react';
import {Link} from 'react-router-dom';
import EditTextChannelMessageContainer from './edit_message_container';

class TextChannelMessageListItem extends React.Component {
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
    App.cable.subscriptions.subscriptions[App.cable.subscriptions.subscriptions.length-1].poof({ message: this.props.message,  currentUser: this.props.currentUser});
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
    let nameParts = this.props.allUsers.filter(user => user.id === this.props.message.author_id)[0].username.split(" ");
    author = nameParts[0].slice(0, 7).concat(" ", ":");

    return (
      <li className="message-list-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {/* maybe author name but then needs user index in controller */}
        <p>{author}</p>
        <p>{this.props.message.chat_content}</p>
        <div className={`edit-message ${this.state.editMessageVis ? "" : "hidden"}`}>
          <EditTextChannelMessageContainer 
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

export default TextChannelMessageListItem;