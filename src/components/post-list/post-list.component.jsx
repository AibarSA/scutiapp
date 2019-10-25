import React from 'react';

import Post from '../post/post.component';

import '../../pages/homepage/homepage.styles.scss';


class PostList extends React.Component {

    constructor(){
        super();
        this.state={
          posts: [],
          searchField: ''
        }
      }

      componentDidMount(){
        fetch('http://localhost:8181/book/bookList')
        .then(response => response.json())
        .then(postlist => this.setState({posts: postlist}));
        
      };
    
    
      render(){
          return(
            <div className="w3-col l8 s12">
               {
                   this.state.posts.map(({title, description, id, publicationDate}) => (
                      <Post key={id} title={title} description={description} publicationDate={publicationDate}/>
                   ))
               }
            </div>
          )
      }

        

}


export default PostList;