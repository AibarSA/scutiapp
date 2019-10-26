import React from 'react';

import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Footer from '../../components/footer/footer.component';


import '../homepage/homepage.styles.scss';

const DetailsPage = () => (
    <div className='detailspage'>
      <div className="w3-content" >
            <Header/>
            <div className="w3-row">
              <h1>Hello from details page!!!</h1>
              <Sidebar/>
            </div><br></br>
      </div>
      <Footer/>
    </div>
)

export default DetailsPage;