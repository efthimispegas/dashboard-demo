import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import * as user from './user';
import * as loading from './loading';
import * as appState from './appState';

const reducer = combineReducers({
  // App state
  appState: appState.reducer,
  // User.
  user: user.reducer,
  // Loading
  loading: loading.reducer,
});

const middlewares = [
  // Thunks.
  thunk,
];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancer);

export default store;
