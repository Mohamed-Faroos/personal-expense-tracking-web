import { call, put } from "redux-saga/effects";
import type { AxiosError, AxiosResponse } from "axios";

import { USER_SIGN_UP, USER_SIGN_UP_CLEAR, USER_SIGN_UP_ERROR, USER_SIGN_UP_SUCCESS } from "./types.ts";
import { registerApi } from "../../services/userService.ts/index.ts";
import type { SignUpRequestType, SignUpResponseType } from "../../contants/types/user.ts";

export const userSignUp = (payload: SignUpRequestType) => ({
	type: USER_SIGN_UP,
	payload
});

export const userSignUpSuccess = (payload: SignUpResponseType) => ({
	type: USER_SIGN_UP_SUCCESS,
	payload
});

export const userSignUpError = (error: string) => ({
	type: USER_SIGN_UP_ERROR,
	payload: error
});

export const userSignUpClear = () => ({
	type: USER_SIGN_UP_CLEAR,
});

export function* userSignUpSaga({ payload }: { payload: SignUpRequestType }) {
	try {
		const response: AxiosResponse = yield call(registerApi, payload);
		if (response.status === 201) {
			yield put(userSignUpSuccess(response.data.data));
		}

	} catch (error) {
		const axiosError = error as AxiosError;
		const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during login.";
		yield put(userSignUpError(errorMessage));
	}
}