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
    let serverId = this.props.allServerIds.filter(serverId => this.props.allServers[serverId].invite_code === this.state.invCode)[0];
    this.props.joinServer({member_id: this.props.serverMember.member_id, server_id: serverId});
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors.length === 0 && this.props.allServerIds.length !== prevProps.allServerIds.length) {
      this.setState({redirectToCreatedServer: true});
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

    let redirectToServer = this.state.redirectToJoinedServer;
    let serverId = this.props.allServerIds.filter(serverId => this.props.allServers[serverId].invite_code === this.state.invCode)[0];
    let serverLoc = Number(serverId);
    if (redirectToServer) {
      return <Redirect to={`/servers/${serverLoc}`} />
    }

    return(
      <div>
        <form className="create-server-form" onSubmit={this.handleSubmit}>
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="create-server-heading">
            <h1>Join a Server</h1>
            <p>Enter an invite below to join an existing server</p>
          </div>
          <img className="upload-img" src={window.noUploadURL}/>
          <label>{this.renderLabelTitle()}
            <input type="text" value={this.state.server_name} onChange={this.updateInput('server_name')}/>
          </label>
          <p>INVITES SHOULD LOOK LIKE</p>
          <p className="undernote">lsjdfoije3OIJDFOSIJsdflj</p>

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