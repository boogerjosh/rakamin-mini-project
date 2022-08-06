import { ADDITEM, EDITITEM, ADDTODO } from "./constants";

const initialState = {
    errorMessage: '',
    newItem: null
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case ADDITEM :
        return {
            ...state,
            errorMessage: action.errorMessage,
            newItem: action.newItem
        };
    case EDITITEM :
        return {
            ...state,
            errorMessage: action.errorMessage,
            newItem: action.newItem
        };
    case ADDTODO :
        return {
            ...state,
            errorMessage: action.errorMessage,
            newItem: action.newItem
        };
      default:
        return state;
    }
  }