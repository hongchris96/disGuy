import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import Placeholder from './placeholder';

const mapSTP = state => ({
  currentUser: state.session.currentUser
});

const mapDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapSTP, mapDTP)(Placeholder);