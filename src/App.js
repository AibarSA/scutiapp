import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import DetailsPage from './pages/detailspage/detailspage.component';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/post' component={DetailsPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
