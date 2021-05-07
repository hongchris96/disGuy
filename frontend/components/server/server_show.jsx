import React from 'react';
import EditServerContainer from './edit_server_container';
import TextChannelListContainer from '../text_channel/text_channel_list_container';

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
    this.props.clearErrors();
    this.setState(prevState => ({
      dropdownVisible: false, 
      editVisible: !prevState.editVisible 
    }));
  }

  render() {

    if (this.props.server === undefined) {
      return null;
    }

    let headDisplay;

    if (this.props.server.server_name.length > 18) {
      headDisplay = this.props.server.server_name.slice(0, 16).concat(" ", "...");
    } else {
      headDisplay = this.props.server.server_name
    }

    return (
      <div className="channel-sidebar">
        <nav className="server-show" onClick={this.openServerSetting} >
          <h3>{headDisplay}</h3>
          <p>{this.state.dropdownVisible ? `\u2715` : `\u25BE`}</p>
        </nav>
        <div className={`server-setting-dropdown ${this.state.dropdownVisible ? "" : "hidden"}`}>
          <p onClick={() => {
            this.props.openModal("InviteModal");
            this.setState({dropdownVisible: false});
          }}>Invite People <img src={window.inviteURL}/></p>
          <p onClick={this.openEditServer}>Server Settings <img src={window.cogURL}/></p>
          <p className="leave-button">Leave Server <img src={window.leaveURL}/></p>
        </div>
        <div className={`server-edit ${this.state.editVisible ? "" : "hidden"}`}>
          <EditServerContainer server={this.props.server} showPageProps={this.props} closeEditSetting={this.openEditServer}/>
        </div>

        <div>
          <TextChannelListContainer serverId={this.props.server.id} />
        </div>

      </div>
    );
  }
}

export default ServerShow;

