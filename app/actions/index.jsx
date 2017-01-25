import axios from 'axios';
import { 
  FETCH_ALL_NOTES,
  NOTE_SELECTED,
  ADD_NOTE
} from 'app/constants/ActionTypes';

function fetchNotes(notes) {
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


function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: note
  }
}

export function startAddNote(title, content){
  return (dispatch) => {
    return axios.post('/notes', {
      title,
      content
    }).then((response) => {
      //console.log("Rsponse from post", response.data)
      dispatch(addNote(response.data));
    }).catch((e) => {
      console.warn(e);
    });
  }
}



