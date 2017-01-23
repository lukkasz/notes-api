import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'app/components/Main';
import routes from 'app/routes';

ReactDOM.render(
  routes,
  document.getElementById('app')
);