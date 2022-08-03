import { useDispatch } from 'react-redux';
import axios from 'axios';
import { MOVELEFTITEM, MOVERIGHTITEM } from './constants';

export function useMoveItem() {
  const dispatch = useDispatch();
  return {
    moveItem: async (payload) => {
      try {
        const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
        const responseMoveRight = await axios.patch(`https://todos-project-api.herokuapp.com/todos/${payload.todo_id}/items/${payload.id}`, {
            "target_todo_id": payload.targettodoId,
            "name": payload.name,
        }, {
            headers: { Authorization: AuthStr }
        });
        dispatch({ errorMessage: '', newItem: responseMoveRight.data, type: MOVERIGHTITEM });
      } catch (err) {
        console.error(err);
      }
    }
  };
}