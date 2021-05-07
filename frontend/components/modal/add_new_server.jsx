import React from 'react';
import CreateServerContainer from '../server/create_server_container';

class AddNewServer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <div className="plus-server">
          <p className="close-modal" onClick={() => this.props.closeModal()}>{`\u2715`}</p>
          <div className="modal-go-create-server">
            <h1>Create a server</h1>
            <p>Your server is where you and your subordinates hang out. 
              Make yours and start chatting.</p>
            <div className="redirect-create-server" onClick={() => this.props.openModal("CreateServer")}>
              <div>
                <img src={window.createServerURL}/>
                <p>Create My Own</p>
              </div>
              <p>{`\u203A`}</p>
            </div>
          </div>

          <div className="modal-go-join-server">
            <h1>Have an invite already?</h1>
            <p onClick={() => this.props.openModal("JoinServer")}>Join a server</p>
          </div>
        </div>

        <div className="blurred-background"></div>
      </div>
    );
  }
}


export default AddNewServer;
