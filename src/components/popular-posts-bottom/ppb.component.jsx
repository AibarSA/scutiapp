import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import '../../pages/homepage/homepage.styles.scss';
import {selectPostList} from '../../redux/post/post.selectors';

const PopularPostsBottom = ({posts}) => (
    <div className="w3-main">


  
  {/* <!-- First Photo Grid--> */}
  <div className="w3-row-padding">
    {
                   posts.map(({title, description, id, publicationDate}) => (
                    <div className="w3-third w3-container w3-margin-bottom" key={id} id={id} title={title} description={description} publicationDate={publicationDate}>
                    <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="Norway"  class="w3-hover-opacity"/>
                    <div className="w3-container w3-white">
                      <p><b>{title}</b></p>
                      <p>{description.substring(0, 100) + "..."}</p>
                    </div>
                  </div>
                   ))

          
    }

  </div>
  

  </div>



)
const mapStateToProps = createStructuredSelector({
    posts: selectPostList
  })

export default connect(mapStateToProps)(PopularPostsBottom);