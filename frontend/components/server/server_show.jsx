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
    this.handleLeaveServer = this.handleLeaveServer.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.serverId === "undefined") {
      this.props.history.push('/servers/@me');
    } else {
      this.props.requestServer(this.props.match.params.serverId);
      this.props.requestServerMembers();
    }
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

  handleLeaveServer(e) {
    e.preventDefault();
    let memberId = this.props.currentUser.id
    let serverMember = this.props.allServerMembers.filter(sm => sm.member_id === memberId && sm.server_id === this.props.server.id);
    this.props.leaveServer(serverMember[0].id);
    this.props.history.push('/servers/@me');
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
    let leaveBut;
    if (this.props.currentUser.id !== this.props.server.host_id) {
      leaveBut = <p className="leave-button" onClick={this.handleLeaveServer}>Leave Server <img src={window.leaveURL}/></p>
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
          {leaveBut}
          
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

