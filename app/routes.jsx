import React from 'react';
import {  Route, IndexRoute } from 'react-router';

import Main from 'app/components/Main';
import NotesContainer from 'app/containers/NotesContainer';

const routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={NotesContainer} />
  </Route>
);

export default routes;