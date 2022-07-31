import { 
    TODOS_LISTS
  } from "./constants";
import { useDispatch } from 'react-redux';
import axios from 'axios';

const _dispatchGetList = async (dispatch) => {
  try {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('token')); 
    const data = await axios.get('https://todos-project-api.herokuapp.com/todos', { 
      headers: { Authorization: AuthStr }
    });
    dispatch({ errorMessage: '', lists: data.data, type: TODOS_LISTS });
  } catch (error) {
    console.log(error);
  }
};

export function useGetLists() {
  const dispatch = useDispatch();
  
  return {
    getListTodos: async () => {
      _dispatchGetList(dispatch);
    },
  };
}


