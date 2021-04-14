import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import DMListContainer from '../dm/dmlist_container';

class LandingZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };

    this.openHomeSetting = this.openHomeSetting.bind(this);
  }

  openHomeSetting(e) {
    e.preventDefault();
    this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }));
  }

  render() {
    return (
      <div className="channel-sidebar">
        <nav className="server-show" onClick={this.openHomeSetting} >
          <h3>{this.props.currentUser.username}</h3>
          <p>{this.state.dropdownVisible ? `\u2715` : `\u25BE`}</p>
        </nav>
        <div className={`server-setting-dropdown ${this.state.dropdownVisible ? "" : "hidden"}`}>
          <button className="logout" onClick={this.props.logout}>Logout</button>
        </div>
        <DMListContainer />
      </div>
    )

  }
}

export default LandingZone;