import { TODOS_LISTS } from './constants';

const initialState = {
    token: {
      lists: [],
    }
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case TODOS_LISTS:
        return {
            ...state,
            lists: action.lists
        };
      default:
        return state;
    }
  }