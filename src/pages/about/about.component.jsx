import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import NavBar from '../../components/nav-bar/nav-bar.component';
import PopularPostsBottom from '../../components/popular-posts-bottom/ppb.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPostList} from '../../redux/post/post.selectors';
import {withRouter} from 'react-router-dom';


class AboutPage extends React.Component{

    render(){
      return(
      <div className='homepage'>
        <NavBar history={this.props.history}/>
        <div className="w3-content" >
          <br/>
          <br/>
          <br/>
              <Header/>
              <div className="w3-row">
            <div className="w3-row-padding  l8 s12">
              
                    <div className="post">
                        <div className="w3-card-4 w3-margin w3-white p-detail">
                            <div className="w3-center">
                               <br/>
                               <h3><b>About us</b></h3>
                            </div>
                            <br/>
                            
                            <div className="w3-container">

                                <p>The NGC23 Site is a knowledge base for the world’s most random and interesting facts.</p>
                                <p>We will produce facts about nearly anything you could think of, from the cutest animals to the most dangerous places in the world, there really is something to please everyone here.</p>
                                <p> NGC23 takes relevant and complex information from journals, specialized magazines and media and makes the information accessible for everyone. </p>
                                

                            </div>
                        </div>
                        
                    </div>
                
            </div>
            {/* <Sidebar history={history}/> */}
            <PopularPostsBottom key={this.props.posts.id} history={this.props.history}/>
        </div><br></br>
        </div>
        <Footer/>
      </div>
  )
      }}
  const mapStateToProps = createStructuredSelector({
    posts: selectPostList
  })
  
  export default connect(mapStateToProps)(withRouter(AboutPage));;