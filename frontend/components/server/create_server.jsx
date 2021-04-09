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
      <form className="create-server-form" onSubmit={this.handleSubmit}>
        <div className="create-server-heading">
          <h1>Customize your server</h1>
          <p>Give your new server a personality with a name.</p>
          <p>You can always change it later.</p>
        </div>
        <label>SERVER NAME
          <input type="text" value={this.state.server_name} onChange={this.updateInput('server_name')}/>
        </label>
        <p>By creating a server, you agree to disGuy's Community Guidelines.</p>

        <div className="create-server-buttons">
          <button>Back</button>
          <input type="submit" value="Create"/>
        </div>
      </form>
    );
  }
}

export default CreateServerForm;