import React from 'react';
import { Link } from 'react-router';

export default function NotesList(props) {
  return(
    <div>
      <ul>
        {props.notes.map((note) => {
          return (
            <li 
              key={note._id} 
              onClick={ () => { props.onSelectNote(note) } }>
                {note.title}
            </li>
          );
        })}
      </ul>
      <Link to="/newNote">
        <button className="btn btn-success">Create Note</button>
      </Link>
    </div>
  );
}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired,
  onSelectNote: React.PropTypes.func.isRequired
};