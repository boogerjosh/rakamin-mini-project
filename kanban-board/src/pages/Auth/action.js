import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LOGIN } from './constants';

export function useAuthorization() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return {
    LoginAction: async (payload) => {
      try {
        const data = await axios.post(`https://todos-project-api.herokuapp.com/auth/login`, payload );
        if (data) {
            dispatch({ errorMessage: '', token: data.data.auth_token, type: LOGIN });
            localStorage.setItem('token', data.data.auth_token);
            navigate('/home');
        }
      } catch (error) {
        dispatch({ errorMessage: error.response ? error.response.data.msg[0] : 'Failed login', type: LOGIN });
      }
    },
  };
}