import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import NavBar from '../../components/nav-bar/nav-bar.component';



const ContactPage = ({posts, match, history}) => (
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
                               <h3><b>Contact us</b></h3>
                            </div>
                            <br/>
                            
                            <div className="w3-container">
                            <h3><b>Here's where to get answers to your questions and offer your feedback.</b></h3>
                                <p> If you have suggestions, recommendations, complaints, please email us at the address below. </p>
                                <p>Email: info@ngc23.com</p>

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
  
export default ContactPage;