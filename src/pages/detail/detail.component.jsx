import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PopularPostsBottom from '../../components/popular-posts-bottom/ppb.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPostList} from '../../redux/post/post.selectors';
import {Helmet} from 'react-helmet';


import '../../pages/homepage/homepage.styles.scss';


class Detail extends React.Component{

  state = {
    post: {title: '', description: '', id: '', publicationDate: '', author: '' }
  }


  componentDidMount() {
    window.scrollTo(0, 0)
    fetch(`http://52.14.153.7:8080/store/book/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(post => this.setState({post}))
  }



  render(){
    return(
        <div className="w3-row">
            <div className="w3-row-padding  l8 s12">
              {/* {
                  this.props.posts.filter(post =>
                      post.id.toString() === this.props.match.params.id.toString()).map(({title, description, id, publicationDate, author}) => ( */}
                    <div key={this.state.post.id} className="post">
                      <Helmet>
                        <title>{this.state.post.title}</title>
                        <meta name="description" content={this.state.post.description.slice(0,100)}/>
                      </Helmet>
                        <div className="w3-card-4 w3-margin w3-white p-detail">
                            <div className="w3-center">
                               <br/>
                               <h3><b>{this.state.post.title}</b></h3>
                               <span className="w3-opacity">{this.state.post.publicationDate}</span>
                            </div>
                            <br/>
                            {/* <div className="detail-image"> */}
                              {/* <img src={author} alt=''/> */}
                            {/* </div> */}
                            <div className="w3-container">
                            <p><div className='adsense'></div><ReactMarkdown key={this.state.post.id} source={this.state.post.description} escapeHtml={false}/></p>
                            </div>
                        </div>
                        <div className="w3-row-padding" >
                          <div className="w3-center w3-margin-bottom">
                            <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                              <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
                            </ul>
                          </div>
                        </div>

                          <PopularPostsBottom key={this.state.post.id} history={this.props.history}/>
                          <div className="w3-row-padding" >
                          <div className="w3-center w3-margin-bottom">
                            <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                              <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
                            </ul>
                          </div>
                        </div>
                    </div>
                {/* )
                )
              } */}
            </div>
            {/* <Sidebar history={this.props.history}/> */}
        </div>





  




)}}

const mapStateToProps = createStructuredSelector({
  posts: selectPostList
})

export default connect(mapStateToProps)(withRouter(Detail));