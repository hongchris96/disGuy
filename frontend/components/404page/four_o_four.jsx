import React from 'react';
import {Link} from 'react-router-dom';

const Page404 = (props) => {
  return (
    <div className="page-404">
      <div className="body-404">
        <div className="left-404">
          <img src={window.title404URL}/>
          <h2>WIZARDS BEHIND CURTAINS?</h2>
          <p>That is so 1939. disGuy is secretly powered by quantum robot bugeaters. 
            Anyway, you look lost here. No match found for <code>{props.location.pathname}</code>. 
            Here's the link back to Home page.</p>
          <Link to="/">HOME</Link>
        </div>
        <div className="right-404"><img src={window.pix404URL}/></div>
      </div>
      <div className="bottom-404">
        <img src={window.faintLogoURL}/>
      </div>
    </div>
  );
};

export default Page404;