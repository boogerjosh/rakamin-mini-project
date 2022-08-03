import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ADDITEM, EDITITEM } from './constants';

export function useAddItem() {
  const dispatch = useDispatch();
  return {
    addItem: async (payload) => {
      try {
        const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
        const responseAddById = await axios.post(`https://todos-project-api.herokuapp.com/todos/${payload.id}/items`, {
            "name": payload.form.taskName,
            "progress_percentage": parseInt(payload.form.progress)
        }, {
            headers: { Authorization: AuthStr }
        });
        dispatch({ errorMessage: '', newItem: responseAddById.data, type: ADDITEM });
      } catch (err) {
        console.error(err);
      }
    },
    editItem: async (payload) => {
      try {
        const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
        const responseEditById = await axios.put(`https://todos-project-api.herokuapp.com/todos/${payload.todo_id}/items/${payload.id}`, {
            "target_todo_id": payload.todo_id,
            "name": payload.form.taskName,
            "progress_percentage": parseInt(payload.form.progress)
        }, {
            headers: { Authorization: AuthStr }
        });
        dispatch({ errorMessage: '', newItem: responseEditById.data, type: EDITITEM });
      } catch (err) {
        console.error(err);
      }
    },
    deleteItem: async (payload) => {
      try {
        const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
        await axios.delete(`https://todos-project-api.herokuapp.com/todos/${payload.todo_id}/items/${payload.id}`, {
            headers: { Authorization: AuthStr }
        });
      } catch (err) {
        console.error(err);
      }
    }
  };
}