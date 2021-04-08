import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ServerShowContainer from '../server/server_show_container';

const LandingZone = (props) => {
  return (
    <div className="mother-body">
      <div className="channel-sidebar">
        <p>DM list or Server Channel list</p>
      </div>
      <div className="chat-box">
        <nav className="chat-box-top">
          <h1>You are Logged in as {props.currentUser.username}</h1>
          <button onClick={props.logout}>Logout</button>
        </nav>
        <div className="chat-box-content">
          <h1>CHAT ZONE</h1>
        </div>
      </div>
    </div>
  )
}

export default LandingZone;