import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import DetailsPage from './pages/detailspage/detailspage.component';
import PrivacyPolicyPage from './pages/privacy-policypage/privacy-policypage.component';
import DmcaPolicyPage from './pages/dmca-policypage/dmca-policypage.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contacts/contactpage.component';
import DisclaimerPage from './pages/disclaimer/disclaimer.component';


function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/post' component={DetailsPage}/>
           <Route  path='/about' component={AboutPage}/>
          <Route  path='/contact' component={ContactPage}/>
          <Route  path='/privacypolicy' component={PrivacyPolicyPage}/>
          <Route  path='/dmca' component={DmcaPolicyPage}/>
          <Route  path='/disclaimer' component={DisclaimerPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
