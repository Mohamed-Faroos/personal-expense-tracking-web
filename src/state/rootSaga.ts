import { takeLatest } from 'redux-saga/effects';

import { USER_LOGIN } from './session/types';
import { userLoginSaga } from './session/userLogin';

import { USER_SIGN_UP } from './signup/types';
import { userSignUpSaga } from './signup/signUp';

import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, GET_EXPENSE_STATS, GET_EXPENSE_TYPES, GET_FILTER_EXPENSE } from './expense/types';
import { getExpenseStatsSaga } from './expense/getExpenseStats';
import { getExpenseTypesSaga } from './expense/getExpenseTypes';
import { getFilteredExpenseSaga } from './expense/filterExpenseHistory';
import { addExpenseSaga } from './expense/addExpense';
import { editExpenseSaga } from './expense/editExpense';
import { deleteExpenseSaga } from './expense/deleteExpense';

function* rootSaga() {
    yield takeLatest(USER_LOGIN, userLoginSaga);
    yield takeLatest(USER_SIGN_UP, userSignUpSaga);
    yield takeLatest(GET_EXPENSE_STATS, getExpenseStatsSaga);
    yield takeLatest(GET_EXPENSE_TYPES, getExpenseTypesSaga);
    yield takeLatest(GET_FILTER_EXPENSE, getFilteredExpenseSaga);
    yield takeLatest(ADD_EXPENSE, addExpenseSaga);
    yield takeLatest(EDIT_EXPENSE, editExpenseSaga);
    yield takeLatest(DELETE_EXPENSE, deleteExpenseSaga);
}


export default rootSaga;
