import { 
    TODOS_LISTS, TODOS_LISTS_BYID
  } from "./constants";
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const fetchTodos = () => {
  return (dispatch) => {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
    return axios.get('https://todos-project-api.herokuapp.com/todos', {
                headers: { Authorization: AuthStr }
             })
             .then((response) => {
              response.data.map(async (res) => {
                let result = await axios.get(`https://todos-project-api.herokuapp.com/todos/${res.id}/items`, {
                  headers: { Authorization: AuthStr }
                });
                res['items'] = result.data;
                return res;
              });
              dispatch({ errorMessage: '', lists: response.data, type: TODOS_LISTS })
             })
            .catch((error) => console.log(error))
            // .finally(() => dispatch(fetchLoading(false)));
  }
}

export const fetchTodoById = (payload) => {
  return (dispatch) => {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
    return axios.get(`https://todos-project-api.herokuapp.com/todos/${payload}/items`, {
                headers: { Authorization: AuthStr }
             })
             .then((response) => {
              dispatch({ errorMessage: '', listById: response.data, type: TODOS_LISTS_BYID });
              return response;
             })
            .catch((error) => console.log(error))
            // .finally(() => dispatch(fetchLoading(false)));
  }
}

// const _dispatchGetList = async (dispatch) => {
//   try {
//     const AuthStr = 'Bearer '.concat(localStorage.getItem('token')); 
//     const data = await axios.get('https://todos-project-api.herokuapp.com/todos', { 
//       headers: { Authorization: AuthStr }
//     });
//     dispatch({ errorMessage: '', lists: data.data, type: TODOS_LISTS });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export function useGetLists() {
//   const dispatch = useDispatch();
  
//   return {
//     getListTodos: () => {
//       _dispatchGetList(dispatch)
//     },
//     getItemById: async (payload) => {
//       try {
//         const AuthStr = 'Bearer '.concat(localStorage.getItem('token')); 
//         const data = await axios.get(`https://todos-project-api.herokuapp.com/todos/${payload}/items`, { 
//           headers: { Authorization: AuthStr }
//         });
//         console.log(data.data);
//         dispatch({ errorMessage: '', lists: [], listById: data.data, type: TODOS_LISTS_BYID });
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   };
// }


