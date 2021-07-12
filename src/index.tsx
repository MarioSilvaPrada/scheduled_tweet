import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './routes/App';
// Pages
import PageNotFound from './routes/PageNotFound';

// Components

const rootElement = document.getElementById('root');
const root = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

render(root, rootElement);
