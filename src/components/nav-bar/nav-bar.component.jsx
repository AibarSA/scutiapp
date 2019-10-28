import React from 'react';

import '../../pages/homepage/homepage.styles.scss';


const NavBar = ({history}) => (
    <div className="w3-top">
  <div className="w3-bar w3-white w3-padding w3-card"  onClick={() => history.push('/')}>
    <a className="w3-bar-item w3-button">Scuti Facts</a>
  </div>
</div>
)

export default NavBar;

