import {combineReducers} from 'redux';
import {loginReducer} from '../reducers/loginReducer';

const reducer = combineReducers({
  loginDetails: loginReducer,
});

export default reducer;