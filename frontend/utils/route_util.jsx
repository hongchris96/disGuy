import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// path and component from AuthRoute itself when called
const Auth = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/placeholder" /> : <Component {...props} />
    )}
  />  
);

const Protected = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />  
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));