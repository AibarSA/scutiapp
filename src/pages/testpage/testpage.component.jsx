import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPostList} from '../../redux/post/post.selectors';

import PostList from '../../components/post-list/post-list.component';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import {Route} from 'react-router-dom';
import Post from '../../components/post/post.component';
import Footer from '../../components/footer/footer.component';
import Detail from '../detail/detail.component';
import NavBar from '../../components/nav-bar/nav-bar.component';



import '../homepage/homepage.styles.scss';

const TestPage = ({posts, match}) => (
  

    <div className='homepage'>
        <NavBar/>
        <div className="w3-content" >
              <br/>
              <br/>
                <Header/>
                <div className="w3-row">
                  <div className="w3-col l8 s12">
                    {
                        posts.filter(post =>
                            post.id == match.params.id).map(({title, description, id, publicationDate}) => (
                          <Detail key={id} title={title} description={description} publicationDate={publicationDate}/>
                      ))

                    }
                  
                  </div>
                <Sidebar/>
              </div>
              <br>
              </br>
        </div>
        <Footer/>
    </div>
)
const mapStateToProps = createStructuredSelector({
    posts: selectPostList
  })
export default connect(mapStateToProps)(TestPage);