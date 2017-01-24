import React from 'react';

export default function NoteDetails(props) {
  if (!props.activeNote) {
    return (<p>dadad</p>);
  }
  return (
    <div>
      <h1>{props.activeNote.title}</h1>
      <div>{props.activeNote.content}</div>
    </div>
  );
}

