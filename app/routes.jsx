import React from 'react';
import {  Route, IndexRoute } from 'react-router';

import Main from 'app/components/Main';
import NotesWrapper from 'app/components/NotesWrapper';

const routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={NotesWrapper} />
  </Route>
);

export default routes;