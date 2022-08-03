import { MOVELEFTITEM, MOVERIGHTITEM} from "./constants";

const initialState = {
    errorMessage: '',
    newItem: null
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case MOVERIGHTITEM :
        return {
            ...state,
            errorMessage: action.errorMessage,
            newItem: action.newItem
        };
    case MOVELEFTITEM :
        return {
            ...state,
            errorMessage: action.errorMessage,
            newItem: action.newItem
        };
      default:
        return state;
    }
  }