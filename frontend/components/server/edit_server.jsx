import React from "react";
import { Redirect } from "react-router";
import classNames from 'classnames';

class EditServerForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.server.id,
      host_id: this.props.server.host_id,
      server_name: this.props.server.server_name
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateServer(this.state);
    // this.props.closeEditSetting();
  }

  updateInput(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleClose() {
    this.props.closeEditSetting();
    this.setState({server_name: this.props.server.server_name});
  }

  handleDelete() {
    this.props.deleteServer(this.props.server.id);
    this.props.closeEditSetting(); // might not need
    this.props.showPageProps.history.push('/servers/@me');
  }

  componentDidMount(){
    this.props.clearErrors();
    this.props.requestServer(this.props.server.id);
  }

  componentDidUpdate(prevProps) {
    if (this.state.id !== this.props.server.id) {
      this.setState({
        id: this.props.server.id,
        host_id: this.props.server.host_id,
        server_name: this.props.server.server_name
      });
    } else if (this.props.server !== undefined && prevProps !== undefined) {
      if (this.props.errors.length === 0 && this.props.server.server_name !== prevProps.server.server_name) {
        this.props.closeEditSetting();
      }
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

    return(

      <div className="edit-server-info">
        <div className="edit-server-sidebar">
          <h1>{this.props.server.server_name}</h1>
          <p>Overview</p>
          <p className="delete-server" onClick={this.handleDelete}>
            Delete Server
          </p>
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
                {this.renderLabelTitle()}
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