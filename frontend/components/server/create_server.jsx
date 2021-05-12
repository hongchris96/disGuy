import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';

class CreateServerForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.server;
    this.state.redirectToCreatedServer = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state);
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
      return (<p>SERVER NAME</p>);
    } else {
      return (
        <p className={errClass}>
          SERVER NAME
          <span className="err-message"> - {message}</span>
        </p>
      );
    }
  }

  render(){

    let redirectToServer = this.state.redirectToCreatedServer;
    let serverLast = this.props.allServerIds[this.props.allServerIds.length - 1];
    let serverLoc = Number(serverLast);
    if (redirectToServer) {
      return <Redirect to={`/servers/${serverLoc}`} />
    }

    return(
      <div>
        <form className="create-server-form" onSubmit={this.handleSubmit}>
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="create-server-heading">
            <h1>Customize your server</h1>
            <p>Give your new server a personality with a name.</p>
            <p>You can always change it later.</p>
          </div>
          <img className="upload-img" src={window.noUploadURL}/>
          <label>{this.renderLabelTitle()}
            <input type="text" value={this.state.server_name} onChange={this.updateInput('server_name')}/>
          </label>
          <p className="undernote">By creating a server, you agree to disGuy's <span>Community Guidelines</span>.</p>

          <div className="create-server-buttons">
            <p onClick={() => this.props.openModal("AddNewServer")}>Back</p>
            <input type="submit" value="Create"/>
          </div>
        </form>

        <div className="blurred-background"></div>

      </div>
    );
  }
}

export default CreateServerForm;