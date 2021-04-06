import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session/session_actions';
import SessionForm from './session_form';

const mapSTP = state => ({
  formType: "Log In",
  navLink: <Link to="/signup">Register</Link> // Routes needed in App
});

const mapDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapSTP, mapDTP)(SessionForm);