import type { AnyAction } from 'redux-saga';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, type SessionState } from './types';

const initialState: SessionState = {
	user: {},
	loading: false,
	error: null,
};

const SessionReducer = (state = initialState, action: AnyAction): SessionState => {
	switch (action.type) {
		case USER_LOGIN:
			return { ...state, loading: true, error: null };
		case USER_LOGIN_SUCCESS:
			return { ...state, user: action.payload, loading: false, error: null };
		case USER_LOGIN_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default SessionReducer;
