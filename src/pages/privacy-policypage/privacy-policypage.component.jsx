import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import NavBar from '../../components/nav-bar/nav-bar.component';


const PrivacyPolicyPage = ({posts, match, history}) => (
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
                        <div className="w3-card-4 w3-margin w3-white ">
                            <div className="w3-center">
                               <br/>
                               <h3><b>Privacy Policy</b></h3>
                               <span className="w3-opacity">Privacy Policy for: www.ngc23.com</span>
                            </div>
                            <br/>
                            
                            <div className="w3-container">
                                <p>Your privacy is very Important to us. this policy will be updated when will necessary. Your personal Information such as IP Address. browser Info. Internal pages Or even suffering Sites Information maybe collect Just for better service purposes.</p> 
                                <h3><b>Cookies and Web Beacons </b></h3>
                                 <p>Where necessary. this site uses to store Information about a visitor’s preferences and history in order to better serve the visitor and/or present the visitor with customized content.</p> 
                                 <h3><b>Controlling Your Privacy </b></h3>
                                 <p>Note that you can change your browser settings to disable cookies If you have privacy concerns Disabling cookies for all sites is not recommended as It may Interfere with your use of some sites The best option is to disable or enable cookies on a per-site basis. Consult your browser documentation for instructions on how to block cookies and other tracking mechanisms.</p>
                                <h3><b>About Google Advertising </b></h3>
                                <p>Any advertisements served by Google,Inc. and affiliated companies may be controlled using cookies. These
                                cookies allow Google to display ads based on your visits to this site and other sites that use Google advertising
                                services. Learn how to opt out of Google’s cookie usage. As mentioned above, any tracking done by Google
                                through cookies and other mechanisms is subject to Google’s own privacy policies.</p>

                                <p>About Google advertising What is the DoubleClick DART cookie? The DoubleClick DART cookie is used by
                                Google in the ads served on publisher websites displaying AdSense for content ads When users visit an
                                AdSense publisher’s website and either view or click on an ad. a cookie may be dropped on that end user’s
                                browser. The data gathered from these cookies will be used to help AdSense publishers better serve and manage
                                the ads on their site(s) and across the web. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy. (Hyperlink this to: http://www.google.com/privacy/ads/)</p>

                                <h5><b>if you’re using this site then you must agree with Privacy Policy provided above. </b></h5>
                                <br/>
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
  


export default PrivacyPolicyPage;

