import React from 'react';
import {  Route, IndexRoute } from 'react-router';

import Main from 'app/components/Main';
import NotesContainer from 'app/containers/NotesContainer';
import NewNote from 'app/components/NewNote';

const routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={NotesContainer} />
    <Route path="newNote" component={NewNote} />
  </Route>
);

export default routes;