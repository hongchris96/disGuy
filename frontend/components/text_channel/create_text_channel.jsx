import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';

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
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors.length === 0 && this.props.allTextChannelIds.length !== prevProps.allTextChannelIds.length) {
      this.setState({redirectToCreatedTextChannel: true});
      this.props.closeModal();
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

  render(){
    // redirect not working
    let channelLast = this.props.allTextChannelIds[this.props.allTextChannelIds.length - 1];
    let redirectToTextChannel = this.state.redirectToCreatedTextChannel;
    let serverLoc = Number(this.props.location.pathname.split('/')[2]);
    let channelLoc = Number(channelLast);
    if (redirectToTextChannel) {
      return <Redirect to={`/servers/${serverLoc}/${channelLoc}`} />
    }

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
          <label>{this.renderLabelTitle()}
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