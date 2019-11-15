import React from 'react';

import '../../pages/homepage/homepage.styles.scss';


const AboutCard = () => (
    <div className="w3-card w3-margin w3-margin-top">
        <img src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt=""/>
        <div className="w3-container w3-white">
        {/* <h4><b>My Name is Bond</b></h4> */}
        <p>The <b>NGC23</b> Site is a knowledge base for the world’s most random and interesting facts.</p>
        </div>
    </div>
)

export default AboutCard;

