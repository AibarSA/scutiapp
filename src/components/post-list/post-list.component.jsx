import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Post from '../post/post.component';
import {selectPostList} from '../../redux/post/post.selectors';

import '../../pages/homepage/homepage.styles.scss';


const PostList =({posts}) => (
            <div className="w3-col l8 s12">
               {
                   posts.map(({title, description, id, publicationDate}) => (
                      <Post key={id} title={title} description={description} publicationDate={publicationDate}/>
                   ))
               }
            </div>
);

const mapStateToProps = createStructuredSelector({
  posts: selectPostList
})



export default connect(mapStateToProps)(PostList);