import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {updatePostList} from '../../redux/post/post.actions';

import Post from '../post/post.component';
import {selectPostList} from '../../redux/post/post.selectors';

import '../../pages/homepage/homepage.styles.scss';


class PostList extends React.Component{

   state = {
         loading: true
      };
   
   componentDidMount(){
      const {updatePostList} = this.props;
      fetch('http://52.14.153.7:8080/store/book/bookList')
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