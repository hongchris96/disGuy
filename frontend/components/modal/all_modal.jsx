import React from 'react';

import CreateServerContainer from '../server/create_server_container';
import CreateTextChannelContainer from '../text_channel/create_text_channel_container';
import CreateDMChannelContainer from '../dm/create_dm_channel_container';
import AddNewServerContainer from './add_new_server_container';

class AllModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let whichModal;
    if (this.props.modal === "CreateServer") whichModal = <CreateServerContainer />;
    else if (this.props.modal === "AddNewServer") whichModal = <AddNewServerContainer />;
    else if (this.props.modal === "CreateTextChannel") whichModal = <CreateTextChannelContainer />;
    else if (this.props.modal === "CreateDMChannel") whichModal = <CreateDMChannelContainer />;
    else whichModal = null;

    return (
      <div>
        {whichModal}
      </div>
    );
  }
}

export default AllModal;

