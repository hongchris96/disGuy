import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="home-div-1">
        <nav>
          <div>
            <img src={window.blueLogoURL} />
          </div>
          <Link to="/login">Login</Link>
        </nav>

        <div className="home-body-1">
          <h1>Your place to talk</h1>
          <p>Whether you’re part of a school club, gaming group, worldwide art community, or just a 
            handful of friends that want to spend time together, disGuy makes it easy to talk every day 
            and hang out more often.</p>
          <div className="home-body-1-buttons">
            <a href="https://github.com/hongchris96/disGuy">Click for Github</a>
            <Link to="/login">Open disGuy in your browser</Link>
          </div>
        </div>
      </div>
      
      <div className="home-div-2">
        <div>
          <h1>{"¯\\_(ツ)_/¯"}</h1>
        </div>
        <div>
          <h2>Some Title Here</h2>
          <p>Some Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;