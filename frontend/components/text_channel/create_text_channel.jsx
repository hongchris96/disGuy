import React from "react";
import { Redirect } from "react-router";

class CreateTextChannelForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.textChannel;
    this.state.redirectToCreatedTextChannel = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTextChannel(this.state);
    this.setState({redirectToCreatedTextChannel: true})
    // this.props.closeModal();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render(){

    let redirectToTextChannel = this.state.redirectToCreatedTextChannel;
    // let serverLast = this.props.allServerIds[this.props.allServerIds.length - 1];
    // let serverLoc = Number(serverLast);
    // if (redirectToTextChannel) {
    //   return <Redirect to={`/servers/${serverLoc}`} />
    // }

    return(
      <div>
        <form className="create-text-channel-form" onSubmit={this.handleSubmit}>
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="create-text-channel-heading">
            <h1>Create Text Channel</h1>
            <p>in Text Channels</p>
          </div>
          <div className="create-channel-type">
            <p>CHANNEL TYPE</p>
            <div className="channel-type-body">
              <img src={window.radioURL}/>
              <div>
                <h1>Text Channel</h1>
                <p>Post images, GIFs, stickers, opinions, and puns</p>
              </div>
            </div>
          </div>
          <label><p>CHANNEL NAME</p>
            <input type="text" value={this.state.text_channel_name} onChange={this.updateInput('text_channel_name')}/>
          </label>
          <div className="create-text-channel-buttons">
            <p onClick={() => this.props.closeModal()}>Cancel</p>
            <input type="submit" value="Create Channel"/>
          </div>
        </form>

        <div className="blurred-background"></div>
      </div>
    );
  }
}

export default CreateTextChannelForm;