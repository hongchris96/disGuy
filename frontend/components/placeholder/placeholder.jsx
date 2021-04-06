import React from 'react';
import {Link} from 'react-router-dom';

const Placeholder = (props) => {

  return (
    <div>
      <h1>You are Logged in!</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}

export default Placeholder;