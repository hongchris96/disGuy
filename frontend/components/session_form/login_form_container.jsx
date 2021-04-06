import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session/session_actions';
import LoginForm from './login_form';

const mapSTP = state => ({
  formType: "Login",
  navLink: <Link to="/signup">Register</Link> // Routes needed in App
});

const mapDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapSTP, mapDTP)(LoginForm);