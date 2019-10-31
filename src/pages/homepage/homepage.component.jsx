import React from 'react';

import PostList from '../../components/post-list/post-list.component';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Footer from '../../components/footer/footer.component';
import NavBar from '../../components/nav-bar/nav-bar.component';




const HomePage = ({posts, match, history}) => (
      <div className='homepage'>
        <NavBar history={history}/>
        <div className="w3-content" >
          <br/>
          <br/>
              <Header/>
              <div className="w3-row">
                <PostList/>
                <Sidebar history={history}/>
              </div><br></br>
        </div>
        <Footer/>
      </div>
  )
  



export default HomePage;