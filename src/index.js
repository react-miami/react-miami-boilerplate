import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes';
import App from './app';

// Stylesheets.
import './styles/sass/andromeda/andromeda.scss';

// Needed for onTouchTap - Can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Routes template.
const template = (
  <Provider store={store}>
    <App>
      <Router history={history}>
        {Routes}
      </Router>
    </App>
  </Provider>
);

const el = document.getElementById('app');
ReactDOM.render(template, el);
