import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import {selectPostList} from '../../redux/post/post.selectors';
import {Route} from 'react-router-dom';
import TestPage from '../testpage/testpage.component';


import '../homepage/homepage.styles.scss';

const DetailsPage = ({posts, match}) => (
    <div className='detailspage'>
      
            {
                  
                  //   posts.filter(post =>
                  //   post.id === match.params.id).map(({title, description, id, publicationDate}) => (
                  //     <Post key={id} title={title} description={description} publicationDate={publicationDate}/>
                  //  ))
                   <Route path={`${match.path}/:id`} component={TestPage}/>
                   
               }
    
    </div>

    
)
const mapStateToProps = createStructuredSelector({
  posts: selectPostList
})
export default connect(mapStateToProps)(DetailsPage);