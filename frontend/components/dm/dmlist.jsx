import React from 'react';
import {Link} from 'react-router-dom';

import DMListItem from './dmlist_items';

class DMChannelList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestDMChannels();
  }

  render(){
    return (
      <div className="channel-list">
        <h3>Direct Messages <span onClick={() => this.props.openModal("CreateDMChannel")} className="add-text-channel">+</span></h3>
        <ul className="dm-channel-list">
          {this.props.dmChannels.filter(dchannel => dchannel.user1_id === this.props.currentUser.id || dchannel.user2_id === this.props.currentUser.id).map(dchannel => {
            return <DMListItem 
              key={dchannel.id} 
              dmChannel={dchannel} 
              currentUser={this.props.currentUser}
              deleteDMChannel={this.props.deleteDMChannel}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default DMChannelList;