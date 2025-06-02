import type { AxiosError, AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { GET_FILTER_EXPENSE, GET_FILTER_EXPENSE_ERROR, GET_FILTER_EXPENSE_SUCCESS, type FilterExpenseResponse } from "./types.ts";
import { getExpenseFilterApi, type ExpenseFilterPayload } from "../../services/expenseService.ts/index.ts";

export const getFilteredExpense = (payload: ExpenseFilterPayload) => ({
    type: GET_FILTER_EXPENSE,
    payload
});

export const getFilteredExpenseSuccess = (payload: FilterExpenseResponse[]) => ({
    type: GET_FILTER_EXPENSE_SUCCESS,
    payload
});

export const getFilteredExpenseError = (error: string) => ({
    type: GET_FILTER_EXPENSE_ERROR,
    payload: error
});

export function* getFilteredExpenseSaga({ payload }: { payload: ExpenseFilterPayload }) {
    try {
        const response: AxiosResponse = yield call(getExpenseFilterApi, payload);
        if (response.status === 200) {
            yield put(getFilteredExpenseSuccess(response.data.data));
        }

    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during getting stats.";
        yield put(getFilteredExpenseError(errorMessage));
    }
}