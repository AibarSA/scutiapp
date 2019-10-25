import React from 'react';

import PostList from '../../components/post-list/post-list.component';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Footer from '../../components/footer/footer.component';


import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
      <div className="w3-content" >
            <Header/>
            <div class="w3-row">
              <PostList/>
              <Sidebar/>
            </div><br></br>
      </div>
      <Footer/>
    </div>
)

export default HomePage;