import React from "react";

class CreateServerForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.server;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.createServer(this.state);
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render(){
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