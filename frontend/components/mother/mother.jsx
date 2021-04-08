import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import ServerListContainer from '../server/server_list_container';
import LandingZoneContainer from './landing_zone_container';
import ServerShowContainer from '../server/server_show_container';

const Mother = () => {
  return (
    <div className="mother">
      <ServerListContainer />
      <Switch>
        <Route exact path="/servers/@me" component={LandingZoneContainer} />
        <Route path='/servers/:serverId' component={ServerShowContainer} />
      </Switch>
    </div>
  )
}

export default Mother;