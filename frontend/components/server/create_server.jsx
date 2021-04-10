import React from "react";
import { Redirect } from "react-router";

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
    this.setState({redirectToCreatedServer: true})
    // this.props.closeModal();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.clearErrors();
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
          <label><p>SERVER NAME</p>
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