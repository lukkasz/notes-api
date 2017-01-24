import React from 'react';

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
    </div>
  );
}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired,
  onSelectNote: React.PropTypes.func.isRequired
}