import { call, put } from "redux-saga/effects";
import { RESET_STATE, UNAUTHORIZED_ERROR_CLEAR, UNAUTHORIZED_ERROR_FOUND, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, type UserLoginAction } from "./types";
import { loginApi } from "../../services/userService.ts";
import type { LoginRequestType, LoginResponseType } from "../../contants/types/user.ts";
import type { AxiosError, AxiosResponse } from "axios";

export const userLogin = (payload: LoginRequestType) => ({
	type: USER_LOGIN,
	payload
});

export const userLoginSuccess = (payload: LoginResponseType) => ({
	type: USER_LOGIN_SUCCESS,
	payload
});

export const userLoginError = (error: string) => ({
	type: USER_LOGIN_ERROR,
	payload: error
});

export const logout = () => ({
	type: RESET_STATE
});

export const setUnauthorizedFound = () => ({
	type: UNAUTHORIZED_ERROR_FOUND
});

export const setUnauthorizedCLEAR = () => ({
	type: UNAUTHORIZED_ERROR_CLEAR
});

export function* userLoginSaga(action: UserLoginAction) {
	try {
		const response: AxiosResponse = yield call(loginApi, action.payload);
		if (response.status === 200) {
			yield put(userLoginSuccess(response.data.data));
		}

	} catch (error) {
		const axiosError = error as AxiosError;
		const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during login.";
		yield put(userLoginError(errorMessage));
	}
}