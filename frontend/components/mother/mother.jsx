import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import ServerListContainer from '../server/server_list_container';
import LandingZoneContainer from './landing_zone_container';
import ServerShowContainer from '../server/server_show_container';
import TextChannelShowContainer from '../text_channel/text_channel_show_container';
import DMChannelShowContainer from '../dm/dm_show_container';

class Mother extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestUsers();
  }

  render() {
    return (
      <div className="mother">
        <ServerListContainer />
        <Route path="/servers/@me" component={LandingZoneContainer} />
        <Route path="/servers/@me/:dmChannelId" component={DMChannelShowContainer} />
        <Route path='/servers/:serverId' component={ServerShowContainer} />
        <Route path='/servers/:serverId/:textChannelId' component={TextChannelShowContainer} />
      </div>
    )
  }
}

export default Mother;