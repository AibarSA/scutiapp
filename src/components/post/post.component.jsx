import React from 'react';

import '../../pages/homepage/homepage.styles.scss';


const Post = ({title, description, id, publicationDate}) => (
<div class="post">
  {/* <!-- Post --> */}
  <div className="w3-card-4 w3-margin w3-white">
    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" />
    <div className="w3-container">
      <h3><b>{title}</b></h3>
      <span class="w3-opacity">{publicationDate}</span>
    </div>

    <div className="w3-container">
      <p>{description}</p>
      <div className="w3-row">
        <div class="w3-col m8 s12">
          <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
        </div>
        {/* <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
        </div> */}
      </div>
    </div>
  </div>
  <hr></hr>
</div>
)

export default Post;