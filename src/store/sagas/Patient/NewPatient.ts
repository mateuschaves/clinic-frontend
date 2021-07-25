import {call, put, takeLatest} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import { push } from 'connected-react-router'

import {AxiosResponse} from 'axios';

import {
    newPatientActions,
    newPatientTypes,
} from '~/store/ducks/Patient/NewPatient';

import {Patient} from '~/shared/types/entity';

import {NewPatientDto} from '~/shared/dto/Patient/new-patient.dto';
import {PatientService} from '~/services/api/resources';

interface newPatientSagaProps extends AnyAction {
    payload: NewPatientDto;
}

export function* newPatientSaga({payload}: newPatientSagaProps) {
    const {successCallback, errorCallback} = payload;

    try {
        const response: AxiosResponse<Patient> = yield call(PatientService.newPatient, {
            ...payload, 
            height: Number(payload.height), 
            weight: Number(payload.weight)
        });

        if (successCallback)
            successCallback();
        yield put(newPatientActions.newPatientSuccess(response));
        yield put(push('/home'))
    } catch (error) {
        if (errorCallback)
            errorCallback();
        yield put(newPatientActions.newPatientError(error));
    }
}

export function* watchNewPatient() {
    yield takeLatest(newPatientTypes.NEW_PATIENT_REQUEST, newPatientSaga);
}