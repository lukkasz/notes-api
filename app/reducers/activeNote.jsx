
export default function activeNoteReducer(state = null, action) {
  switch (action.type) {
    case 'NOTE_SELECTED':
      return action.payload;
    
    default: 
      return state;
  }
}