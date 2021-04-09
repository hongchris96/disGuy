import React from 'react';

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };

    this.openServerSetting = this.openServerSetting.bind(this);
  }

  componentDidMount() {
    this.props.requestServer(this.props.match.params.serverId);
  }

  openServerSetting(e) {
    e.preventDefault();
    this.setState(prevState => ({ dropdownVisible: !prevState.dropdownVisible }));
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
          <h3>Drop here</h3>
          <p>Server Settings Gear icon</p>
        </div>

        {/* render ChannelIndex pass in props */}
        <div className="channel-list">
          <h3>Text Channels <span>+</span></h3>
          <ul>
            <li>#general</li>
            <li>#introduction</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default ServerShow;

