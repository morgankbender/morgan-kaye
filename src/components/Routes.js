// External imports
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// Local helper imports
import ScrollHandler from './ScrollHandler';
// "Page" imports
import Landing from './Landing';

// Load specific component dependent on path (URL)
export default () => (
  <Router>
    <ScrollHandler>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </ScrollHandler>
  </Router>
);
