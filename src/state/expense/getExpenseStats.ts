import type { AxiosError, AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

import { GET_EXPENSE_STATS, GET_EXPENSE_STATS_ERROR, GET_EXPENSE_STATS_SUCCESS, type ExpenseStatsResponse } from "./types.ts";
import { getExpenseStatsApi } from "../../services/expenseService.ts/index.ts";

export const getExpenseStats = () => ({
	type: GET_EXPENSE_STATS
});

export const getExpenseStatsSuccess = (payload: ExpenseStatsResponse) => ({
	type: GET_EXPENSE_STATS_SUCCESS,
	payload
});

export const getExpenseStatsError = (error: string) => ({
	type: GET_EXPENSE_STATS_ERROR,
	payload: error
});

export function* getExpenseStatsSaga() {
	try {
		const response: AxiosResponse = yield call(getExpenseStatsApi);
		if (response.status === 200) {
			yield put(getExpenseStatsSuccess(response.data.data));
		}

	} catch (error) {
		const axiosError = error as AxiosError;
		const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during getting stats.";
		yield put(getExpenseStatsError(errorMessage));
	}
}