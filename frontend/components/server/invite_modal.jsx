import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';

class SeeInviteLink extends React.Component {
  constructor(props){
    super(props);

    this.state = {invCode: this.props.currentServer.invite_code}
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render(){

    return(
      <div>
        <form className="create-text-channel-form" onSubmit={this.handleSubmit}>
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="create-text-channel-heading">
            <h1>INVITE FRIENDS TO SERVERNAME</h1>
          </div>
          <label>SEND SERVER INVITE LINK TO A FRIEND</label>
          <input type="text" value={this.state.invCode}/>
        </form>

        <div className="blurred-background"></div>
      </div>
    );
  }
}

export default SeeInviteLink;