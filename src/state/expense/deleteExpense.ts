import type { AxiosError, AxiosResponse } from "axios";
import { call, delay, put } from "redux-saga/effects";
import { DELETE_EXPENSE, DELETE_EXPENSE_CLEAR, DELETE_EXPENSE_ERROR, DELETE_EXPENSE_SUCCESS, type DeleteExpenseAction } from "./types.ts";
import { deleteExpenseApi, type DeleteExpensePayload } from "../../services/expenseService.ts/index.ts";

export const deleteExpense = (payload: DeleteExpensePayload) => ({
    type: DELETE_EXPENSE,
    payload
});

export const deleteExpenseSuccess = () => ({
    type: DELETE_EXPENSE_SUCCESS,
});

export const deleteExpenseError = (error: string) => ({
    type: DELETE_EXPENSE_ERROR,
    payload: error
});

export const deleteExpenseClear = () => ({
    type: DELETE_EXPENSE_CLEAR
});

export function* deleteExpenseSaga(action: DeleteExpenseAction) {
    try {
        const response: AxiosResponse = yield call(deleteExpenseApi, action.payload);
        if (response.status === 200) {
            yield put(deleteExpenseSuccess());
            yield delay(1500);
            yield put(deleteExpenseClear());
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during delete expense.";
        yield put(deleteExpenseError(errorMessage));
    }
}