import React from 'react';

export default function NoteDetails(props) {
  if (!props.activeNote) {
    return (<p>dadad</p>);
  }
  return (
    <div>
      <h1>{props.activeNote.title}</h1>
      <pre>{props.activeNote.content}</pre>
    </div>
  );
}

