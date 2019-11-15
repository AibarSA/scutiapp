import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import NavBar from '../../components/nav-bar/nav-bar.component';
import PopularPostsBottom from '../../components/popular-posts-bottom/ppb.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPostList} from '../../redux/post/post.selectors';
import {withRouter} from 'react-router-dom';


class DmcaPolicyPage extends React.Component{

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
                               <h3><b>DMCA</b></h3>
                            </div>
                            <br/>
                            
                            <div className="w3-container">
                                <h3><b>Digital Millenium Copyright Act Policy (DMCA)</b></h3>
                                <p> It is my policy to respond to clear notices of alleged copyright infringement. If you believe that your intellectual property rights have been infringed upon by one of my users. i need you to send us a proper notification. All notices should comply with the notification requirements of the DMCA You MUST provide the following information: </p>
                                <p>1. Identify yourself as either:</p>
                                <p> - The owner of a copyrighted work(s), or</p>
                                <p> - A person "authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."</p>
                                <br/>
                                <p>2 Identify the copyrighted work claimed to have been infringed.</p>
                                <br/>
                                <p>3. Identify the material that is claimed to be infringing or to be the subject of the infringing activity and that is to be removed or access to which is to be disabled by providing me the exact location of the infringing file with the exact interupload.com link.</p>
                                <br/>
                                <p>4. Provide me the web address under which the link has been published.</p>

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
  
  export default connect(mapStateToProps)(withRouter(DmcaPolicyPage));





