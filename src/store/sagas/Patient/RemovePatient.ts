import { call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { AxiosResponse } from 'axios';

import {
    removePatientActions,
    removePatientTypes,
} from '~/store/ducks/Patient/RemovePatient';

import {
    listPatientActions,
} from '~/store/ducks/Patient/ListPatient';

import { Patient } from '~/shared/types/entity';

import { RemovePatientDto } from '~/shared/dto/Patient/remove-patient.dto';
import { PatientService } from '~/services/api/resources';

interface removePatientSagaProps extends AnyAction {
    payload: RemovePatientDto;
}

export function* removePatientSaga({payload}: removePatientSagaProps) {
    const {id, successCallback, errorCallback} = payload;

    try {
        const response: AxiosResponse<Patient> = yield call(PatientService.removePatient, {
            id,
            errorCallback,
            successCallback
        });

        if (successCallback)
            successCallback();
        yield put(removePatientActions.removePatientSuccess(response));
        yield put(listPatientActions.listPatient({ page: 1, take: 10 }));
    } catch (error) {
        if (errorCallback)
            errorCallback();
        yield put(removePatientActions.removePatientError(error));
    }
}

export function* watchRemovePatient() {
    yield takeLatest(removePatientTypes.REMOVE_PATIENT_REQUEST, removePatientSaga);
}