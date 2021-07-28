import { call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { AxiosResponse } from 'axios';

import {
    listPatientActions,
    listPatientTypes,
} from '~/store/ducks/Patient/ListPatient';

import { ListPatientDto } from '~/shared/dto/Patient/list-patient.dto';
import { PatientService } from '~/services/api/resources';
import { PatientPaginated } from '~/shared/types/entity';

interface listPatientSagaProps extends AnyAction {
    payload: ListPatientDto;
}

export function* listPatientSaga({payload}: listPatientSagaProps) {
    const {successCallback, errorCallback} = payload;

    try {
        const response: AxiosResponse<PatientPaginated> = yield call(PatientService.listPatient, payload);

        if (successCallback)
            successCallback();
        yield put(listPatientActions.listPatientSuccess(response.data));
    } catch (error) {
        if (errorCallback)
            errorCallback();
        yield put(listPatientActions.listPatientError(error));
    }
}

export function* watchListPatient() {
    yield takeLatest(listPatientTypes.LIST_PATIENT_REQUEST, listPatientSaga);
}