import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import App from './containers/app'
import { fruits } from './actions/fruits';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(thunk, loggerMiddleware),
);

store.dispatch(fruits());

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('slots')
);
