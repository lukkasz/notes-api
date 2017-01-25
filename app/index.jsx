import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, hashHistory} from 'react-router';

import configureStore from 'app/store/configureStore';
import routes from 'app/routes';

import style from 'app/styles/style.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);