import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import {Route, Switch} from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/create_user_form_container';
import PlaceholderContainer from './placeholder/placeholder_container';

// import list of containers

const App = () => {
  return(
    <div>
      <h1>disGuy app.jsx</h1>
      <Switch>
        <ProtectedRoute exact path="/placeholder" component={PlaceholderContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  );
};

export default App;