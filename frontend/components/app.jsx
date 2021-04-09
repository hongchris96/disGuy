import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import {Route, Switch} from 'react-router-dom';

import Home from './home/home';
import Page404 from './404page/four_o_four';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/create_user_form_container';
import MotherContainer from './mother/mother_container';
import AllModalContainer from './modal/all_modal_container';


const App = () => {
  return(
    <div>
      <AllModalContainer />

      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/servers" component={MotherContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;