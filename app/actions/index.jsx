import axios from 'axios';
import { 
  FETCH_ALL_NOTES,
  NOTE_SELECTED
} from 'app/const';

export function fetchNotes(notes) {
  return {
    type: FETCH_ALL_NOTES,
    payload: notes
  };
}

export function startFetchNotes(){
  return (dispatch) => {
    axios.get('/notes').then((response) => {
      //console.log("data", response.data);
      dispatch(fetchNotes(response.data.notes));
    }).catch( (e) => {
      console.warn(e);
    });
  };
}

export function selectNote(note) {
  return {
    type: NOTE_SELECTED,
    payload: note
  }
}