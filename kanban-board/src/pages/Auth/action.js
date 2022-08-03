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
            navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
}