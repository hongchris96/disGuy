import React from "react";

class CreateDirectMessageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.directMessage;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDirectMessage(this.state);
    // App.cable.subscriptions.subscriptions[0].speak({ message: this.state });
    this.setState({chat_content: ''});
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate() {
    if (this.props.location.pathname.split("/")[3] !== this.state.channel_id) {
      this.setState({channel_id: this.props.location.pathname.split("/")[3]});
    }
  }

  render(){

    return(
      <div className="write-text-channel-chat">
        <p>{`\u279C`}</p>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.chat_content} 
            onChange={this.updateInput("chat_content")} 
            placeholder="Type message here"
          />
        </form>
      </div>
    );
  }
}

export default CreateDirectMessageForm;