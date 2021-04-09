import React from 'react';
import CreateServerContainer from '../server/create_server_container';

class AddNewServer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="plus-server">
        <p>x</p>
        <div className="modal-create-server">
          <h1>Create a server</h1>
          <p>Your server is where you and your subordinates hang out. 
            Make yours and start chatting.</p>
          <p>Create my own</p>
        </div>

        <div className="modal-join-server">
          <h1>Have an invite already?</h1>
          <button>Join a server</button>
        </div>

        {/* invisible components */}
        {/* <CreateServerContainer /> */}
      </div>
    );
  }
}


export default AddNewServer;
