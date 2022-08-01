import { TODOS_LISTS, TODOS_LISTS_BYID } from './constants';

const initialState = {
    errorMessage: '',
    lists: [],
    listById: [],   
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case TODOS_LISTS:
        return {
            ...state,
            errorMessage: action.errorMessage,
            lists: action.lists
        };
    case TODOS_LISTS_BYID:
        return {
            ...state,
            errorMessage: action.errorMessage,
            listById: action.listById
        };  
      default:
        return state;
    }
  }