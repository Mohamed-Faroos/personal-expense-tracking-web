import { takeLatest } from 'redux-saga/effects';

import { USER_LOGIN } from './session/types'; // Ensure USER_LOGIN is typed correctly as a string constant
import { userLoginSaga } from './session/userLogin';

function* rootSaga() {
    yield takeLatest(USER_LOGIN, userLoginSaga);
}

export default rootSaga;
