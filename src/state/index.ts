import { combineReducers } from 'redux';
import loginReducer from './session/index';
import SignUpReducer from './signup';
import expenseReducer from './expense';

const rootReducer = combineReducers({
	session: loginReducer,
	signUp: SignUpReducer,
	expense: expenseReducer
});

export default rootReducer;
