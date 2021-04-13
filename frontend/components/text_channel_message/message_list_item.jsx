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
  }

  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({ messageSettingVis: true });
  }
  
  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({ messageSettingVis: false });
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
    if (this.props.message.author_id === this.props.currentUser.id) {
      author = this.props.currentUser.username.split(" ")[1].slice(0, 7).concat(" ", ":");
    } else {
      author = "User".concat(" ", this.props.message.author_id, " ", ":");
    }

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
          <p onClick={() => this.props.deleteMessage(this.props.message.id)}><img src={window.trashURL}/></p>
        </div>
      </li>
    );
  }
}

export default TextChannelMessageListItem;