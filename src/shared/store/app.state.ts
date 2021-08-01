import { AxiosError, AxiosResponse } from 'axios';
import { User, Patient, PatientPaginated } from '~/shared/types/entity';

export interface InitialSigninStateProps {
    user: AxiosResponse<User> | undefined;
    loading: boolean;
    error: AxiosError | undefined;
}

export interface InitialNewPatientStateProps {
    patient: AxiosResponse<Patient> | undefined;
    loading: boolean;
    error: AxiosError | undefined;
}

export interface InitialListPatientStateProps {
    patients: PatientPaginated | undefined;
    loading: boolean;
    error: AxiosError | undefined;
}

export interface InitialRemovePatientStateProps {
    response: undefined;
    loading: boolean;
    error: AxiosError | undefined;
}


export interface RootState {
    signin: InitialSigninStateProps;
    newPatient: InitialNewPatientStateProps;
    listPatient: InitialListPatientStateProps;
    removePatient: InitialRemovePatientStateProps;
}