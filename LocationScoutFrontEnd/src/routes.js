import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';

export default (
    <Route path="/" component={App}>
    <Route exact component={Home} />    
    <Route path="/about-us" component={About} />
  </Route>

);

