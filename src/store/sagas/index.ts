import { all } from 'redux-saga/effects';

import { watchSignin } from './Auth/Signin';
import { watchNewPatient } from './Patient/NewPatient';
import { watchListPatient } from './Patient/ListPatient';
import { watchRemovePatient } from './Patient/RemovePatient';

export default function* rootSaga() {
    yield all([
        watchSignin(),
        watchNewPatient(),
        watchListPatient(),
        watchRemovePatient(),
    ])
}