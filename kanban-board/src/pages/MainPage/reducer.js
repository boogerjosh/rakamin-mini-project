import { TODOS_LISTS, TODOS_LISTS_BYID } from './constants';

const initialState = {
    errorMessage: '',
    boardDatas: [],
    cardDatas: [],   
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case TODOS_LISTS:
        return {
            ...state,
            errorMessage: action.errorMessage,
            boardDatas: action.boardDatas
        };
    case TODOS_LISTS_BYID:
        return {
            ...state,
            errorMessage: action.errorMessage,
            cardDatas: action.cardDatas
        };  
      default:
        return state;
    }
  }