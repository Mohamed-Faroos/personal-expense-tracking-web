import type { AnyAction } from 'redux-saga';
import { USER_SIGN_UP, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_ERROR, type SignUpState, USER_SIGN_UP_CLEAR } from './types';

const initialState: SignUpState = {
	success: false,
	loading: false,
	error: null,
};

const SignUpReducer = (state = initialState, action: AnyAction): SignUpState => {
	switch (action.type) {
		case USER_SIGN_UP:
			return { ...state, loading: true, error: null };
		case USER_SIGN_UP_SUCCESS:
			return { ...state, success: true, loading: false, error: null };
		case USER_SIGN_UP_ERROR:
			return { ...state, loading: false, error: action.payload };
		case USER_SIGN_UP_CLEAR:
			return { ...state, success: false, loading: false, error: null };
		default:
			return state;
	}
};

export default SignUpReducer;
