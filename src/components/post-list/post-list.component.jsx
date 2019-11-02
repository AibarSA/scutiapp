import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {convertPostListToMap} from '../../utils/utils';
import {updatePostList} from '../../redux/post/post.actions';
import WithSpinner from '../with-spinner/with-spinner.component';

import Post from '../post/post.component';
import {selectPostList} from '../../redux/post/post.selectors';

import '../../pages/homepage/homepage.styles.scss';

const PostWithSpinner = WithSpinner(Post);

class PostList extends React.Component{

   state = {
         loading: true
      };
   
   componentDidMount(){
      const {updatePostList} = this.props;
      fetch('http://localhost:8181/book/bookList')
      .then(response => response.json())
      .then(posts => 
         { updatePostList(posts);
            // this.setState({loading: false});
         });
   };

   render(){
      const {posts} = this.props;

     return(
            <div className="w3-col l8 s12">
               { 
                   posts.map(({title, description, id, publicationDate, author}) => (
                      <Post key={id} id={id} author={author} title={title} description={description} publicationDate={publicationDate}/>
                   ))
               }
            </div>
);}}

const mapStateToProps = createStructuredSelector({
  posts: selectPostList,
  
})

const mapDispatchToProps = dispatch => ({
   updatePostList: posts => dispatch(updatePostList(posts))
})



export default connect(mapStateToProps,mapDispatchToProps)(PostList);