import { 
  FETCH_ALL_NOTES,
  ADD_NOTE
} from 'app/constants/ActionTypes';

export default function reducerNotes(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_NOTES:
      return action.payload;
    
    case ADD_NOTE: 
      return [
        ...state,
        action.payload
      ];
    
    default:
      return state;
  }
}