import { combineReducers } from 'redux';
import loginReducer from './session/index';

const rootReducer = combineReducers({
	session: loginReducer,
});

export default rootReducer;
