import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PopularPostsBottom from '../../components/popular-posts-bottom/ppb.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPostList} from '../../redux/post/post.selectors';
import Sidebar from '../../components/sidebar/sidebar.component';

import '../../pages/homepage/homepage.styles.scss';


class Detail extends React.Component{


  componentDidMount() {
    window.scrollTo(0, 0)
  }



  render(){
    return(
        <div className="w3-row">
            <div className="w3-col l8 s12">
              {
                  this.props.posts.filter(post =>
                      post.id == this.props.match.params.id).map(({title, description, id, publicationDate, bookImage}) => (
                    <div className="post">
                        <div className="w3-card-4 w3-margin w3-white">
                            <div className="w3-center">
                               <br/>
                               <h3><b>{title}</b></h3>
                               <span className="w3-opacity">{publicationDate}</span>
                            </div>
                            <br/>
                            <img src={bookImage} alt="Nature" />
                            <div className="w3-container">
                              <ReactMarkdown source={description} escapeHtml={false}/>
                            </div>
                        </div>
                          <hr/>
                          <PopularPostsBottom history={this.props.history}/>
                    </div>
                )
                )
              }
            </div>
            <Sidebar history={this.props.history}/>
        </div>





  




)}}

const mapStateToProps = createStructuredSelector({
  posts: selectPostList
})

export default connect(mapStateToProps)(withRouter(Detail));