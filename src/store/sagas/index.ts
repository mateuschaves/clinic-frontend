import {all} from 'redux-saga/effects';

import {watchSignin} from './Auth/Signin';
import {watchNewPatient} from './Patient/NewPatient';

export default function* rootSaga() {
    yield all([
        watchSignin(),
        watchNewPatient(),
    ])
}