import { 
    TODOS_LISTS, TODOS_LISTS_BYID
  } from "./constants";
import { useDispatch } from 'react-redux';
import axios from 'axios';

export function useGetLists() {
  const dispatch = useDispatch();
  
  return {
    getListTodos: async () => {
      try {
        const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
        const response = await axios.get('https://todos-project-api.herokuapp.com/todos', {
          headers: { Authorization: AuthStr }
        });
        var i = 0, len = response.data.length;
        while (i < len) {
          const responseByid = await axios.get(`https://todos-project-api.herokuapp.com/todos/${response.data[i].id}/items`, {
            headers: { Authorization: AuthStr }
          });
          response.data[i].items = responseByid.data;
          i++
        }
        dispatch({ errorMessage: '', boardDatas: response.data, type: TODOS_LISTS });
      } catch (err) {
        console.error(err);
      }
    },
  };
}


