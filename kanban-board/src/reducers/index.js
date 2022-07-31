import { combineReducers } from 'redux';
import AuthReducers from '../pages/Auth/reducer';
import MainPageReducers from '../pages/MainPage/reducer';

const rootReducer = combineReducers({
    auth: AuthReducers,
    mainPage: MainPageReducers
});
  
export default rootReducer;