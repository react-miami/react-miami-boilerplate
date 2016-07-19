import { combineReducers, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// Middleware.
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import * as reducers from './reducers';

// Combine the reducers for the store
const appReducers = combineReducers({
  ...reducers,
  routing: routerReducer
});

const logger = createLogger();

// Apply all the middleware for Redux
const middlewares = applyMiddleware(
  // reduxRouterMiddleware,
  thunkMiddleware,
  logger,
  promiseMiddleware
);

// Create the Redux Store
export const store = createStore(appReducers, middlewares);
// reduxRouterMiddleware.listenForReplays(store);

// Move the react-router stuff into Redux
export const history = syncHistoryWithStore(browserHistory, store);
// const reduxRouterMiddleware = syncHistory(history);
