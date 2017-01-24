import { combineReducers } from 'redux';
import notesReducer from 'app/reducers/notes';
import activeNoteReducer from 'app/reducers/activeNote';

const rootReducer = combineReducers({
  notes: notesReducer,
  activeNote: activeNoteReducer
});

export default rootReducer;