import React from 'react';
import classNames from 'classnames';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  updateInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderLabelTitle(field) {
    let errClass = classNames({
      "session-form-label-title": true,
      "err-color": true
    });
    let message = this.props.errors.find(err => err.toUpperCase().includes(field));
    if (message === undefined) {
      return (<p className="session-form-label-title">{field}</p>);
    } else {
      return (
        <p className={errClass}>
          {field}
          <span className="err-message"> - {message}</span>
        </p>
      );
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="app-background">
        <div>DISGUY</div>
        <div onSubmit={this.handleSubmit} className="create-user-div">
          <h1>Create an account</h1>
          <form>
            <label>
              {this.renderLabelTitle("EMAIL")}
              <input type="text" value={this.state.email} onChange={this.updateInput('email')}/>
            </label>

            <label>
              {this.renderLabelTitle("USERNAME")}
              <input type="text" value={this.state.username} onChange={this.updateInput('username')}/>
            </label>

            <label>
              {this.renderLabelTitle("PASSWORD")}
              <input type="password" value={this.state.password} onChange={this.updateInput('password')}/>
            </label>

            <input type="submit" value="Continue"/>
          </form>
          <p>{this.props.navLink}</p>
        </div>
      </div>
    );
  }
}

export default SignUpForm;