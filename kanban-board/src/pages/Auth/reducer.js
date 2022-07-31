import { LOGIN } from './constants';

const initialState = {
    errorMessage: '',
    token: {
      token: '',
    }
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN:
        return {
            ...state,
            errorMessage: action.errorMessage,
            token: action.token
        };
      default:
        return state;
    }
  }