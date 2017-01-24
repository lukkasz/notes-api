import { FETCH_ALL_NOTES } from 'app/const';

export default function reducerNotes(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_NOTES:
      return [
        ...state,
        ...action.payload
      ];
    
    default:
      return state;
  }
}