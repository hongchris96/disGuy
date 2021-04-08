import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import ServerListContainer from '../server/server_list_container';
import LandingZoneContainer from './landing_zone_container';

const Mother = (props) => {
  return (
    <div className="mother">
      <ServerListContainer />
      <LandingZoneContainer />
    </div>
  )
}

export default Mother;