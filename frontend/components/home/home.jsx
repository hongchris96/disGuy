import React from 'react';
import {Link} from 'react-router-dom';
import {faGithub, faLinkedin, faAngellist} from "@fortawesome/free-brands-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
            <a href="https://github.com/hongchris96/disGuy" target="_blank">Click for Github</a>
            <Link to="/login">Open disGuy in your browser</Link>
          </div>
        </div>

        <img className="deco2" src={window.splash_deco2}/>
        <img className="deco1" src={window.splash_deco1}/>
      </div>
      
      <div className="home-div-2">
        <div>
          <img src={window.splash1}/>
          <div className="home-div-text">
            <h2>Create an invite-only place where you belong</h2>
            <p>disGuy servers are organized into topic-based 
              channels where you can collaborate, share, and 
              just talk about your day without clogging up a group chat.</p>
          </div>
        </div>
      </div>

      <div className="home-div-3">
        <div>
          <img src={window.splash2}/>
          <div className="home-div-text">
            <h2>Where hanging out is easy</h2>
            <p>Grab a seat in a voice channel when you’re free. 
              Friends in your server can see you’re around and 
              instantly pop in to talk without having to call.</p>
          </div>
        </div>
      </div>

      <div className="home-div-4">
        <div>
          <img src={window.splash3}/>
          <div className="home-div-text">
            <h2>From few to a fandom</h2>
            <p>Get any community running with moderation tools 
              and custom member access. Give members special powers, 
              set up private channels, and more.</p>
          </div>
        </div>
      </div>

      <div className="home-div-5">
        <div>
          <div className="home-div-text">
            <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
            <p>Low-latency messaging feels like you’re in the same room. 
              Type hello over chat, see friends talk about their days, or gather 
              up and type hello to each other.</p>
          </div>
          <img src={window.splash4}/>
        </div>
      </div>

      <div className="home-div-footer">
        <div>
          <h2>Get to know me</h2>
          <ul>
            <a href="https://hongchris96.com/" target="_blank"><FontAwesomeIcon icon={faUser}/></a>
            <a href="https://github.com/hongchris96" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/chen-wei-christopher-hong-4b189162/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://angel.co/u/chen-wei-christopher-hong" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a>
          </ul>

          <p>© Chris Hong</p>
        </div>
      </div>

    </div>
  );
};

export default Home;