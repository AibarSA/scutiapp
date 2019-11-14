import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import NavBar from '../../components/nav-bar/nav-bar.component';



const DisclaimerPage = ({posts, match, history}) => (
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
                               <h3><b>Disclaimer</b></h3>
                            </div>
                            <br/>
                            
                            <div className="w3-container">
                                <h3><b>Copyrighted Contents?</b></h3>
                                <p>  What to do if I want you to remove certain copyrighted comments from your website? Please note that we do not host any copyrighted content on this website. The comments (text) contains only information shared by users that do not contain data that might be copyrighted in any way. However, i offer a service to remove comments from my website if the copyright holder of the content requests so. These removal requests are only valid if:</p>
                                <p>• You are, or your company is. the copyright holder of the content in question.</p>
                                <p>• You provide the exact URLs to the comment.</p>
                                <p>• You provide the complete name(s) of the content in question.</p>
                                <p>• You send the removal request using a verifiable email address (e.g. address@yourname/yourcompany com)</p>
                                <br/>
                                <p>if your request complies with all of these rules, send a mail to info@ngc23.com. Please keep the correspondence polite.</p>
                                <br/>
                                <p>I remove postings as soon as i can, usually within 4 days. Keep in mind that i can only handle removal requests that comply with the above rules.</p>
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
  
export default DisclaimerPage;





