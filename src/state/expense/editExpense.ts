import type { AxiosError, AxiosResponse } from "axios";
import { call, delay, put } from "redux-saga/effects";
import { EDIT_EXPENSE, EDIT_EXPENSE_CLEAR, EDIT_EXPENSE_ERROR, EDIT_EXPENSE_SUCCESS, type EditExpenseAction } from "./types.ts";
import { editExpenseApi } from "../../services/expenseService.ts/index.ts";
import type { EditExpensePayload } from "../../pages/Expenses/EditExpenseFromModal/index.tsx";

export const editExpense = (payload: EditExpensePayload) => ({
    type: EDIT_EXPENSE,
    payload
});

export const editExpenseSuccess = () => ({
    type: EDIT_EXPENSE_SUCCESS,
});

export const editExpenseError = (error: string) => ({
    type: EDIT_EXPENSE_ERROR,
    payload: error
});

export const editExpenseClear = () => ({
    type: EDIT_EXPENSE_CLEAR
});

export function* editExpenseSaga(action: EditExpenseAction) {
    try {
        const response: AxiosResponse = yield call(editExpenseApi, action.payload);
        if (response.status === 200) {
            yield put(editExpenseSuccess());
            yield delay(1500);
            yield put(editExpenseClear());
        }
    } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError?.response?.data as { errorMessage?: string })?.errorMessage || "An error occurred during edit expense.";
        yield put(editExpenseError(errorMessage));
    }
}