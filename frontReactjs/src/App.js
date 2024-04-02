import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MasterLayouts from './layouts/admin/MasterLayouts';
import Dashbord from './components/admin/Dashbord';
import Profile from './components/admin/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={MasterLayouts} />
          <Route path="/dashbord" component={Dashbord} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


