import React from "react";
import { Redirect } from "react-router";

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
    this.props.closeEditSetting();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleClose() {
    this.props.closeEditSetting();
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

  componentDidUpdate() {
    if (this.props.channel !== undefined && this.state.id !== this.props.channel.id) {
      this.props.requestTextChannel(this.props.channel.id);
      this.setState({
        id: this.props.channel.id,
        server_id: this.props.channel.server_id,
        text_channel_name: this.props.channel.text_channel_name
      });
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
          <p className="delete-server" onClick={this.handleDelete}>
            Delete Channel
          </p>
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
                <p>CHANNEL NAME</p>
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