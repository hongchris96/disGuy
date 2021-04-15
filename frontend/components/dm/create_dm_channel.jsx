import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';

class CreateDMChannelForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.dmChannel;
    this.state.redirectToCreatedDMChannel = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDMChannel(this.state);
  }

  updateInput(field) {
    return e => this.setState({[field]: e.target.value});
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (this.props.allDMChannels !== undefined) {
      if (this.props.allDMChannels.length !== prevProps.allDMChannels.length) {
        this.setState({redirectToCreatedDMChannel: true});
        this.props.closeModal();
      }
    }
  }

  render(){
    // redirect not working
    let channelLast = this.props.allDMChannels[this.props.allDMChannels.length - 1];
    let redirectToDMChannel = this.state.redirectToCreatedDMChannel;
    let channelLoc = Number(channelLast.id);
    if (redirectToDMChannel) {
      return <Redirect to={`/servers/@me/${channelLoc}`} />
    }

    return(
      <div>
        <form className="create-text-channel-form" onSubmit={this.handleSubmit}>
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="create-text-channel-heading">
            <h1>Select Users</h1>
          </div>

          <select className="user-selection" value={this.state.user2_id} size="5">
            {this.props.allOtherUsers.map((user) => {
              return <option onClick={this.updateInput('user2_id')} value={user.id}>{user.username}</option>
            })}
          </select>
          <input className="create-dm-button" type="submit" value="Create DM"/>
        </form>

        <div className="blurred-background"></div>
      </div>
    );
  }
}

export default CreateDMChannelForm;