import { combineReducers } from 'redux';
import loginReducer from './session/index';
import SignUpReducer from './signup';

const rootReducer = combineReducers({
	session: loginReducer,
	signUp: SignUpReducer
});

export default rootReducer;
