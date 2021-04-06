import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, login } from '../../actions/session/session_actions';
import LoginForm from './login_form';

const mapSTP = state => ({
  errors: state.errors.session,
  formType: "Login",
  navLink: <Link to="/signup">Register</Link>
});

const mapDTP = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(LoginForm);