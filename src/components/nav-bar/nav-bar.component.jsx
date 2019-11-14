import React from 'react';

import '../../pages/homepage/homepage.styles.scss';


const NavBar = ({history}) => (
//     <div className="w3-top">
//   <div className="w3-bar w3-white w3-padding w3-card"  onClick={() => history.push('/')}>
//     <a className="w3-bar-item w3-button">Scuti Facts</a>
//   </div>
// </div>
// <!-- Links (sit on top) -->
<div className="w3-top">
  <div className="w3-bar w3-padding w3-white" >
    <div className="w3-col s3" onClick={() => history.push('/')}>
      <p className="w3-button w3-block">HOME</p>
    </div>
    <div className="w3-col s3" onClick={() => history.push('/about')}>
      <p  className="w3-button w3-block">ABOUT</p>
    </div>
    <div className="w3-col s3" onClick={() => history.push('/contact')}>
      <p  className="w3-button w3-block">CONTACT</p>
    </div>
    <div className="w3-col s3" onClick={() => history.push('/privacypolicy')}>
      <p  className="w3-button w3-block">PRIVACY POLICY</p>
    </div>
    <div className="w3-col s3" onClick={() => history.push('/dmca')}>
      <p  className="w3-button w3-block">DMCA</p>
    </div>
    <div className="w3-col s3" onClick={() => history.push('/disclaimer')}>
      <p  className="w3-button w3-block">DISCLAIMER</p>
    </div>
  </div>
</div>
)

export default NavBar;

