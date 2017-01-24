import React from 'react';

import NotesListContainer from 'app/containers/NotesListContainer';
import NotesDetailsContainer from 'app/containers/NotesDetailsContainer';

export default function NotesWrapper() {
  return(
    <div className="row">
      <div className="col-sm-4">
        <NotesListContainer />
      </div>
      <div className="col-sm-8">
        <NotesDetailsContainer />
      </div>
    </div>  
  );
}