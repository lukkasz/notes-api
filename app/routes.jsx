import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from 'app/components/Main';
import Home from 'app/components/Home'
import Test from 'app/components/Test';

import configureStore from 'app/store/configureStore';
const store = configureStore();

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path="test" component={Test} />
      </Route>
    </Router>
  </Provider>
)

export default routes;