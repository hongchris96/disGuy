import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class EditTextChannelForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: "", // this.props.channel.id,
      server_id: "", // this.props.channel.server_id,
      text_channel_name: "" //this.props.channel.text_channel_name
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTextChannel(this.state);
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleClose() {
    this.props.closeEditSetting();
    this.props.clearErrors();
    this.setState({text_channel_name: this.props.channel.text_channel_name});
  }

  handleDelete() {
    this.props.deleteTextChannel(this.props.channel.id);
    this.props.closeEditSetting(); // might not need
    this.props.textChannelListProps.history.push(`/servers/${this.props.serverId}`);
  }

  componentDidMount(){
    this.props.clearErrors();
    if (this.props.channel !== undefined) {
      this.props.requestTextChannel(this.props.channel.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.channel !== undefined && this.state.id !== this.props.channel.id) {
      this.props.requestTextChannel(this.props.channel.id);
      this.setState({
        id: this.props.channel.id,
        server_id: this.props.channel.server_id,
        text_channel_name: this.props.channel.text_channel_name
      });
    } else if (this.props.channel !== undefined && prevProps.channel !== undefined) {
      if (this.props.errors.length === 0 && this.props.channel.text_channel_name !== prevProps.channel.text_channel_name) {
        this.props.closeEditSetting();
      }
    }
  }

  renderLabelTitle() {
    let errClass = classNames({
      "err-color": true
    });
    let message = this.props.errors[0];
    if (message === undefined) {
      return (<p>CHANNEL NAME</p>);
    } else {
      return (
        <p className={errClass}>
          CHANNEL NAME
          <span className="err-message"> - {message}</span>
        </p>
      );
    }
  }

  renderDeleteButton() {
    if (this.props.server.host_id === this.props.currentUser.id) {
      return (
        <p className="delete-server" onClick={this.handleDelete}>
          Delete Channel
        </p>
      )
    } else {
      return (
        <p className="delete-server-disabled">
          Delete Channel
          <span><FontAwesomeIcon icon={faLock}/></span>
        </p>
      )
    }
  }

  render(){

    if (this.props.channel === undefined) {
      return null;
    }

    return(

      <div className="edit-server-info">
        <div className="edit-server-sidebar">
          <h1># {this.props.channel.text_channel_name}</h1>
          <p>Overview</p>
          {this.renderDeleteButton()}
        </div>
        <div className="edit-server-body">
          <form className="edit-server-form" onSubmit={this.handleSubmit}>
            <div className="close-edit-server">
              <p className="close-edit-server-button" onClick={this.handleClose}>{`\u2715`}</p>
              <p>ESC</p>
            </div>
            <div className="edit-server-heading">
              <h1>Overview</h1>
            </div>
            <div className="edit-server-content">
              <label className="edit-input-place">
                {this.renderLabelTitle()}
                <input type="text" value={this.state.text_channel_name} onChange={this.updateInput('text_channel_name')}/>
              </label>

              <input type="submit" value="Save Changes"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditTextChannelForm;