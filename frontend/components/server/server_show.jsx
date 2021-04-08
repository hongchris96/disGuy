import React from 'react';

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestServer();
  }

  render() {
    return (
      <div>
        <h1>Blah</h1>
      </div>
    );
  }
}

export default ServerShow;

