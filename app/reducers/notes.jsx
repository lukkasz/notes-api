import { FETCH_ALL_NOTES } from 'app/constants/ActionTypes';

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