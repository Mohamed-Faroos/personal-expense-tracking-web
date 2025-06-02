import type { AnyAction } from 'redux-saga';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, type SessionState, UNAUTHORIZED_ERROR_FOUND, UNAUTHORIZED_ERROR_CLEAR } from './types';

const initialState: SessionState = {
	user: {},
	loading: false,
	error: null,
	isUnauthorized: false,
};

const SessionReducer = (state = initialState, action: AnyAction): SessionState => {
	switch (action.type) {
		case USER_LOGIN:
			return { ...state, loading: true, error: null };
		case USER_LOGIN_SUCCESS:
			return { ...state, user: action.payload, loading: false, error: null };
		case USER_LOGIN_ERROR:
			return { ...state, loading: false, error: action.payload };
		case UNAUTHORIZED_ERROR_FOUND:
			return { ...state, isUnauthorized: true, loading: false };
		case UNAUTHORIZED_ERROR_CLEAR:
			return { ...state, isUnauthorized: false, loading: false };
		default:
			return state;
	}
};

export default SessionReducer;
