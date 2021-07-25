import {call, put, takeLatest} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import { push } from 'connected-react-router'

import {AxiosResponse} from 'axios';

import {
    signinActions,
    signinTypes,
} from '~/store/ducks/Auth/Signin';

import {User} from '~/shared/types/entity';

import {SigninDto} from '~/shared/dto/Auth/signin.dto';
import {AuthService} from '~/services/api/resources';

interface signinSagaProps extends AnyAction {
    payload: SigninDto;
}

export function* signinSaga({payload}: signinSagaProps) {
    const {successCallback, errorCallback} = payload;

    try {
        const response: AxiosResponse<User> = yield call(AuthService.sigIn, payload);

        if (successCallback)
            successCallback();
        yield put(signinActions.signinSuccess(response));
        yield put(push('/home'))
    } catch (error) {
        if (errorCallback)
            errorCallback();
        yield put(signinActions.signinError(error));
    }
}

export function* watchSignin() {
    yield takeLatest(signinTypes.SIGNIN_REQUEST, signinSaga);
}