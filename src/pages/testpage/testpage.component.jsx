import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPostList} from '../../redux/post/post.selectors';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Detail from '../detail/detail.component';
import NavBar from '../../components/nav-bar/nav-bar.component';



import '../homepage/homepage.styles.scss';

const TestPage = ({posts, match, history}) => (
  

    <div className='homepage'>
        <NavBar history={history}/>
        <div className="w3-content" >
              <br/>
              <br/>
                <Header/>
                {
                        posts.filter(post =>
                            post.id.toString() === match.params.id.toString()).map(({title, description, id, publicationDate, author}) => (
                          <Detail key={id} title={title} description={description} publicationDate={publicationDate} author={author}/>
                      ))

                    }
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