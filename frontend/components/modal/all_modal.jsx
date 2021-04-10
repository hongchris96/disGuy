import React from 'react';

import CreateServerContainer from '../server/create_server_container';
import AddNewServerContainer from './add_new_server_container';

class AllModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let whichModal;
    if (this.props.modal === "CreateServer") whichModal = <CreateServerContainer />;
    else if (this.props.modal === "AddNewServer") whichModal = <AddNewServerContainer />;
    else whichModal = null;

    return (
      <div>
        {whichModal}
      </div>
    );
  }
}

export default AllModal;
