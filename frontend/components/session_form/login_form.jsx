import React from 'react';
import classNames from 'classnames';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  updateInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderLabelTitle(field) {
    let errClass = classNames({
      "session-form-label-title": true,
      "err-color": true
    });
    let message = this.props.errors[0];
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
      <div className="login-form-div">
        <div onSubmit={this.handleSubmit} className="login-form">
          <h1>Welcome back!</h1>
          <p>We're so excited to see you again!</p>

          <form>
            <label>
              {this.renderLabelTitle('EMAIL')}
              <input type="text" value={this.state.email} onChange={this.updateInput('email')}/>
            </label>

            <label>
              {this.renderLabelTitle('PASSWORD')}
              <input type="password" value={this.state.password} onChange={this.updateInput('password')}/>
            </label>

            <input type="submit" value={this.props.formType}/>
          </form>
          <p>Need an account? {this.props.navLink}</p>
        </div>

        <div className="demo-login">
          <h1>Demo Login Placeholder</h1>
        </div>

      </div>
    );
  }
}

export default LoginForm;