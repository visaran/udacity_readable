import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('root'));
