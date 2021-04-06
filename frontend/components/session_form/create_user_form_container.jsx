import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, createUser } from '../../actions/session/session_actions';
import SignUpForm from './create_user_form';

const mapSTP = state => ({
  errors: state.errors.session,
  formType: "Sign Up",
  navLink: <Link to="/login">Already have an account?</Link>
});

const mapDTP = dispatch => ({
  signup: user => dispatch(createUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(SignUpForm);