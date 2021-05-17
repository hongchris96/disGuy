import React from "react";


class EditDirectMessageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.message;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.updateDirectMessage(this.state);
    App.cable.subscriptions.subscriptions[App.cable.subscriptions.subscriptions.length-1].update2({ message: this.state });
    this.props.closeEditMessage();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleClose() {
    this.props.closeEditMessage();
    this.props.clearErrors();
    this.setState({chat_content: this.props.message.chat_content});
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.chat_content} onChange={this.updateInput("chat_content")}/>
        <p>Hit Enter to update</p>
        <p onClick={this.handleClose}>cancel</p>
      </form>
    );
  }
}

export default EditDirectMessageForm;