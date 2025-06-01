import { takeLatest } from 'redux-saga/effects';

import { USER_LOGIN } from './session/types';
import { userLoginSaga } from './session/userLogin';

import { USER_SIGN_UP } from './signup/types';
import { userSignUpSaga } from './signup/signUp';

import { GET_EXPENSE_STATS, GET_EXPENSE_TYPES } from './expense/types';
import { getExpenseStatsSaga } from './expense/getExpenseStats';
import { getExpenseTypesSaga } from './expense/getExpenseTypes';

function* rootSaga() {
    yield takeLatest(USER_LOGIN, userLoginSaga);
    yield takeLatest(USER_SIGN_UP, userSignUpSaga);
    yield takeLatest(GET_EXPENSE_STATS, getExpenseStatsSaga);
    yield takeLatest(GET_EXPENSE_TYPES, getExpenseTypesSaga);
}


export default rootSaga;
