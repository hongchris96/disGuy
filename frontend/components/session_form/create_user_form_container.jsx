import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session/session_actions';
import SessionForm from './session_form';

const mapSTP = state => ({
  formType: "Sign Up",
  navLink: <Link to="/login">Already have an account?</Link> // Routes needed in App
});

const mapDTP = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapSTP, mapDTP)(SessionForm);