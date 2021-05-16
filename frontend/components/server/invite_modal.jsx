import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';

class SeeInviteLink extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      invCode: this.props.currentServer.invite_code,
      cbutton: "Copy"
    }

    this.copy = this.copy.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  copy(e) {
    e.preventDefault();
    document.querySelector('.inv-text').select();
    document.execCommand('copy');
    let copyButton = document.querySelector('.copy-button')
    this.setState({cbutton: "Copied"});
    copyButton.classList.add('copied');
    setTimeout(() => {
      copyButton.classList.remove('copied');
      this.setState({cbutton: "Copy"})
    }, 1000);
  }

  render(){

    return(
      <div>
        <form className="invite-link-modal">
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="invite-link-heading">
            <h1>INVITE FRIENDS TO SERVERNAME</h1>
          </div>
          <div className="the-link">
            <label>SEND SERVER INVITE LINK TO A FRIEND</label>
            <input className="inv-text" type="text" value={this.state.invCode} readOnly/>
            <button className="copy-button" onClick={this.copy}>{this.state.cbutton}</button>
            <p>This is your invite link. Copy it and send it to your friend.</p>
          </div>
        </form>

        <div className="blurred-background"></div>
      </div>
    );
  }
}

export default SeeInviteLink;