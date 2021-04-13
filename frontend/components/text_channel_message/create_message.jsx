import React from "react";

class CreateTextChannelMessageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.textChannelMessage;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTextChannelMessage(this.state);
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
          <input type="text" value={this.state.chat_content} onChange={this.updateInput("chat_content")}/>
        </form>
      </div>
    );
  }
}

export default CreateTextChannelMessageForm;