import React from "react";

class EditServerForm extends React.Component {
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

  componentDidMount(){
    this.props.clearErrors();
    this.props.requestServer(this.props.match.params.serverId);
  }

  render(){
    return(

      <div className="edit-server-info">
        <div className="edit-server-sidebar">
          <h1>{this.props.server.server_name}</h1>
          <p>Overview</p>
          <p>Delete Server</p> {/* Will be link or button */}
        </div>

        <form className="edit-server-form" onSubmit={this.handleSubmit}>
          <div className="edit-server-heading">
            <h1>Server Overview</h1>
          </div>
          <label>SERVER NAME
            <input type="text" value={this.state.server_name} onChange={this.updateInput('server_name')}/>
          </label>

          <input type="submit" value="Save Changes"/>
        </form>
      </div>
    );
  }
}

export default EditServerForm;