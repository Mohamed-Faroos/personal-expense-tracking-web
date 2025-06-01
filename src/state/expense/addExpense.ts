import type { AxiosError, AxiosResponse } from "axios";
import { call, delay, put } from "redux-saga/effects";
import { ADD_EXPENSE, ADD_EXPENSE_CLEAR, ADD_EXPENSE_ERROR, ADD_EXPENSE_SUCCESS } from "./types.ts";
import { addExpenseApi, type ExpenseAddPayload } from "../../services/expenseService.ts/index.ts";

export const addExpense = (payload: ExpenseAddPayload) => ({
    type: ADD_EXPENSE,
    payload
});

export const addExpenseSuccess = () => ({
    type: ADD_EXPENSE_SUCCESS,
});

export const addExpenseError = (error: string) => ({
    type: ADD_EXPENSE_ERROR,
    payload: error
});

export const addExpenseClear = () => ({
    type: ADD_EXPENSE_CLEAR,
});

export function* addExpenseSaga({ payload }: { payload: ExpenseAddPayload }) {
    try {
        const response: AxiosResponse = yield call(addExpenseApi, payload);
        if (response.status === 201) {
            yield put(addExpenseSuccess());
            yield delay(1500);
            yield put(addExpenseClear());
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during getting stats.";
        yield put(addExpenseError(errorMessage));
    }
}