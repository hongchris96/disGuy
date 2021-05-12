import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';

class JoinServerForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      invCode: ''
    };
    this.state.redirectToJoinedServer = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let memberId = this.props.serverMember.member_id;
    let serverMemberObj = {member_id: memberId, invite_code: this.state.invCode}
    this.props.joinServer(serverMemberObj);
    this.props.closeModal();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (this.state.invCode[0] === " ") this.setState({invCode: this.state.invCode.slice(1)});
    if (this.props.errors.length === 0 && this.props.allServerIds.length !== prevProps.allServerIds.length) {
      this.setState({redirectToCreatedServer: true});
      // this.props.closeModal();
    }
  }

  renderLabelTitle() {
    let errClass = classNames({
      "err-color": true
    });
    let message = this.props.errors[0];
    if (message === undefined) {
      return (<p>INVITE LINK</p>);
    } else {
      return (
        <p className={errClass}>
          INVITE LINK
          <span className="err-message"> - {message}</span>
        </p>
      );
    }
  }

  render(){

    let redirectToServer = this.state.redirectToCreatedServer;
    let justJoinedServer = Object.values(this.props.allServers).filter(s => s.invite_code === this.state.invCode);
    let serverLoc = justJoinedServer[0] ? justJoinedServer[0].id : undefined;
    // let serverLast = this.props.allServerIds[this.props.allServerIds.length - 1];
    // let serverLoc = Number(serverLast);
    if (redirectToServer) {
      return <Redirect to={`/servers/${serverLoc}`} />
    }

    return(
      <div>
        <form className="join-server-form" onSubmit={this.handleSubmit}>
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="join-server-heading">
            <h1>Join a Server</h1>
            <p>Enter an invite below to join an existing server</p>
          </div>
          <label>{this.renderLabelTitle()}
            <input type="text" value={this.state.invCode} onChange={this.updateInput('invCode')} placeholder="nJpxHTGYDOdYChkD0OvJXQ"/>
          </label>
          <p className="undernote-title">INVITES SHOULD LOOK LIKE</p>
          <div className="undernotes">
            <p>nJpxHTGYDOdYChkD0OvJXQ</p>
            <p>US_vpZ-i1nREkQwmjnaKkg</p>
            <p>JvXB7bIezCxS2VDJgDSzdw</p>
          </div>

          <div className="create-server-buttons">
            <p onClick={() => this.props.openModal("AddNewServer")}>Back</p>
            <input type="submit" value="Join Server"/>
          </div>
        </form>

        <div className="blurred-background"></div>

      </div>
    );
  }
}

export default JoinServerForm;