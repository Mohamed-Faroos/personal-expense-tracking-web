import { call, put } from "redux-saga/effects";
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "./types";
import { loginApi } from "../../services/userService.ts";
import type { LoginRequestType, LoginResponseType } from "../../lib/types/user.ts";
import type { AxiosResponse } from "axios";

export const userLogin = (payload: LoginRequestType) => ({
	type: USER_LOGIN,
	payload
});

export const userLoginSuccess = (payload: LoginResponseType) => ({
	type: USER_LOGIN_SUCCESS,
	payload
});

export const userLoginError = (error: object) => ({
	type: USER_LOGIN_ERROR,
	payload: error
});

export function* userLoginSaga({ payload }: { payload: LoginRequestType }) {
	try {
		const response: AxiosResponse = yield call(loginApi, payload);
		if (response.status === 200) {
			console.log(response.data);
			yield put(userLoginSuccess(response.data.data));
		}

	} catch (error) {
		yield put(userLoginError(error as object));
	}
}