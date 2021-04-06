import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.login(this.state);
  }

  updateInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <div onSubmit={this.handleSubmit} className="login-form-div">
          <h1>Welcome back!</h1>
          <p>We're so excited to see you again!</p>

          <form>
            <label>EMAIL
              <input type="text" value={this.state.email} onClick={this.updateInput('email')}/>
            </label>

            <label>PASSWORD
              <input type="password" value={this.state.password} onClick={this.updateInput('password')}/>
            </label>

            <input type="submit" value={this.props.formType}/>
          </form>
          <footer>
            <p>Need an account? {this.props.navLink}</p>
          </footer>
        </div>

        <div className="demo-login">
          <h1>Demo Login Placeholder</h1>
        </div>

      </div>
    );
  }
}

export default LoginForm;