import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import NavBar from '../../components/nav-bar/nav-bar.component';



const AboutPage = ({posts, match, history}) => (
      <div className='homepage'>
        <NavBar history={history}/>
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
                                
                                <p> scuti facts a website  that takes relevant and complex information from journals, specialized magazines and media and converts it into colorful and animated slideshows that are easy and fun to read, making the information accessible for everyone. </p>
                                

                            </div>
                        </div>
                        
                    </div>
                
            </div>
            {/* <Sidebar history={history}/> */}
        </div><br></br>
        </div>
        <Footer/>
      </div>
  )
  
export default AboutPage;