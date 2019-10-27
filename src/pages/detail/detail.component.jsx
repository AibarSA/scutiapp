import React from 'react';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import DetailsPage from '../../pages/detailspage/detailspage.component';
import PopularPostsBottom from '../../components/popular-posts-bottom/ppb.component';


import '../../pages/homepage/homepage.styles.scss';


const Detail = ({title, description, id, publicationDate, history, match}) => (
<div className="post">
  

<div className="w3-card-4 w3-margin w3-white">
<div className="w3-center">
  <br/>
      <h3><b>{title}</b></h3>
      <span className="w3-opacity">{publicationDate}</span>
      
    </div>
    <br/>
    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" />
    

    <div className="w3-container">
      <p>{description}</p>
      
    </div>
  </div>
  <hr/>

  <PopularPostsBottom/>
      
      
  </div>



)

export default withRouter(Detail);