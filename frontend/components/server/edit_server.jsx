import React from "react";

class EditServerForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.server;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit() {
    this.props.updateServer(this.state);
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleClose() {
    this.props.closeEditSetting();
  }

  componentDidMount(){
    this.props.clearErrors();
    this.props.requestServer(this.props.server.id);
  }

  render(){
    return(

      <div className="edit-server-info">
        <div className="edit-server-sidebar">
          <h1>{this.props.server.server_name}</h1>
          <p>Overview</p>
          <p className="delete-server">Delete Server</p> {/* Will be link or button */}
        </div>
        <div className="edit-server-body">
          <form className="edit-server-form" onSubmit={this.handleSubmit}>
            <div className="close-edit-server">
              <p className="close-edit-server-button" onClick={this.handleClose}>{`\u2715`}</p>
              <p>ESC</p>
            </div>
            <div className="edit-server-heading">
              <h1>Server Overview</h1>
            </div>
            <div className="edit-server-content">
              <label className="edit-input-place">
                <p>SERVER NAME</p>
                <input type="text" value={this.state.server_name} onChange={this.updateInput('server_name')}/>
              </label>

              <input type="submit" value="Save Changes"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditServerForm;