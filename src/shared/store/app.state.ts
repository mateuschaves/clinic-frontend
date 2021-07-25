import {AxiosError, AxiosResponse} from 'axios';
import {User, Patient} from '~/shared/types/entity';

export interface InitialSigninStateProps {
    user: AxiosResponse<User> | undefined,
    loading: boolean,
    error: AxiosError | undefined,
}

export interface InitialNewPatientStateProps {
    patient: AxiosResponse<Patient> | undefined;
    loading: boolean,
    error: AxiosError | undefined,
}


export interface RootState {
    signin: InitialSigninStateProps;
    newPatient: InitialNewPatientStateProps;
}