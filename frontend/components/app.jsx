import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route, Switch} from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/create_user_form_container';
import PlaceholderContainer from './placeholder/placeholder_container';

// import list of containers

const App = () => {
  return(
    <div>
      <h1>disGuy app.jsx</h1>
      <Route exact path="/placeholder" component={PlaceholderContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </div>
  );
};

export default App;