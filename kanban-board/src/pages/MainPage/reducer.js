import { TODOS_LISTS } from './constants';

const initialState = {
    errorMessage: '',
    lists: [],   
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case TODOS_LISTS:
        return {
            ...state,
            errorMessage: action.errorMessage,
            lists: action.lists
        };
      default:
        return state;
    }
  }