import React from 'react';

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestServer(this.props.server.id);
  }

  render() {
    return (
      <div className="channel-sidebar">
        <nav>
          <h3>{this.props.server.server_name}</h3>
          {/* render ChannelIndex pass in props */}
        </nav>

      </div>
    );
  }
}

export default ServerShow;

