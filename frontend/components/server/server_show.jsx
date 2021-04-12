import React from 'react';
import EditServerContainer from './edit_server_container';

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      editVisible: false
    };

    this.openServerSetting = this.openServerSetting.bind(this);
    this.openEditServer = this.openEditServer.bind(this);
  }

  componentDidMount() {
    this.props.requestServer(this.props.match.params.serverId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.server !== prevProps.server) {
      this.setState(() => ({ dropdownVisible: false }));
    }
  }

  openServerSetting(e) {
    e.preventDefault();
    this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }));
  }

  openEditServer(e) {
    // e.preventDefault();
    this.setState(prevState => ({
      dropdownVisible: false, 
      editVisible: !prevState.editVisible 
    }));
  }

  render() {

    if (this.props.server === undefined) {
      return null;
    }

    return (
      <div className="channel-sidebar">
        <nav className="server-show" onClick={this.openServerSetting} >
          <h3>{this.props.server.server_name}</h3>
          <p>{this.state.dropdownVisible ? `\u2715` : `\u25BE`}</p>
        </nav>
        <div className={`server-setting-dropdown ${this.state.dropdownVisible ? "" : "hidden"}`}>
          <p onClick={this.openEditServer}>Server Settings Gear icon</p>
        </div>
        <div className={`server-edit ${this.state.editVisible ? "" : "hidden"}`}>
          <EditServerContainer server={this.props.server} showPageProps={this.props} closeEditSetting={this.openEditServer}/>
        </div>

        {/* render ChannelIndex pass in props */}
        <div className="channel-list">
          <h3>Text Channels {`(inactive)`}<span>+</span></h3>
          <ul>
            <li>#general {`(inactive)`}</li>
            <li>#introduction {`(inactive)`}</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default ServerShow;

