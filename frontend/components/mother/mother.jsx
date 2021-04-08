import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import ServerListContainer from '../server/server_list_container';

const Mother = (props) => {
  return (
    <div>
      <ServerListContainer />
      <h1>You are Logged in! {props.currentUser.username}</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}

export default Mother;