import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route, Switch} from 'react-router-dom';

// import list of containers

const App = () => {
  return(
    <div>
      <h1>disGuy app.jsx</h1>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  );
};

export default App;