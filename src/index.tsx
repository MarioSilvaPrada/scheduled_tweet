import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import App from './routes/App';
// Pages
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import PageNotFound from './routes/PageNotFound';

// Components

const rootElement = document.getElementById('root');
const root = (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/1' component={Page1} />
        <Route exact path='/2' component={Page2} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
);

render(root, rootElement);
