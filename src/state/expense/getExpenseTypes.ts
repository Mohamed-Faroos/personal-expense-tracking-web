import type { AxiosError, AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

import { GET_EXPENSE_TYPES, GET_EXPENSE_TYPES_ERROR, GET_EXPENSE_TYPES_SUCCESS, type ExpenseTypeResponse } from "./types.ts";
import { getExpenseTypesApi } from "../../services/expenseService.ts/index.ts";

export const getExpenseTypes = () => ({
    type: GET_EXPENSE_TYPES
});

export const getExpenseTypesSuccess = (payload: ExpenseTypeResponse) => ({
    type: GET_EXPENSE_TYPES_SUCCESS,
    payload
});

export const getExpenseTypesError = (error: string) => ({
    type: GET_EXPENSE_TYPES_ERROR,
    payload: error
});

export function* getExpenseTypesSaga() {
    try {
        const response: AxiosResponse = yield call(getExpenseTypesApi);
        if (response.status === 200) {
            yield put(getExpenseTypesSuccess(response.data));
        }

    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during getting stats.";
        yield put(getExpenseTypesError(errorMessage));
    }
}