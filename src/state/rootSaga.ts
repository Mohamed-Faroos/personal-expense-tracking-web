import { takeLatest } from 'redux-saga/effects';

import { USER_LOGIN } from './session/types'; // Ensure USER_LOGIN is typed correctly as a string constant
import { userLoginSaga } from './session/userLogin';
import { USER_SIGN_UP } from './signup/types';
import { userSignUpSaga } from './signup/signUp';

function* rootSaga() {
    yield takeLatest(USER_LOGIN, userLoginSaga);
    yield takeLatest(USER_SIGN_UP, userSignUpSaga); // Ensure USER_SIGN_UP is typed correctly as a string constant
}

export default rootSaga;
