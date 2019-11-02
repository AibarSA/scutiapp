import React from 'react';
import ReactMarkdown from 'react-markdown';
import {withRouter} from 'react-router-dom';



import '../../pages/homepage/homepage.styles.scss';


const Post = ({title, description, id, publicationDate, author, history}) => (
<div className="post" >
  {/* <!-- Post --> */}
  <div className="w3-card-4 w3-margin w3-white" >
    <div className="post-image">
    <img src={author} alt=''/>
    </div>
    

      <div className="w3-container" >
      <h3><b>{title}</b></h3>
      <span className="w3-opacity">{publicationDate}</span>
    </div>

    <div className="w3-container">

    <div className='desc-cover'>
    <div className='desc-content'>
    <ReactMarkdown source={description} escapeHtml={false}/>
    </div>
    </div>

      <div className="w3-row">
        <div className="w3-col m8 s12">
          <p><button className="w3-button w3-padding-large w3-white w3-border" 
          onClick={() => history.push(`${'/post/'}${id}`)}><b>READ MORE »</b></button></p>

        </div>
        {/* <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
        </div> */}
      </div>
    </div>
  </div>
  <hr/>
</div>
)

export default withRouter(Post);