import {AxiosError, AxiosResponse} from 'axios';
 
import {Patient} from '~/shared/types/entity';
import {NewPatientDto} from '~/shared/dto/Patient/new-patient.dto';

import { InitialNewPatientStateProps } from '~/shared/store/app.state';

export const newPatientTypes = {
   NEW_PATIENT_REQUEST: 'patient/NEW_PATIENT_REQUEST',
   NEW_PATIENT_SUCCESS: 'patient/NEW_PATIENT_SUCCESS',
   NEW_PATIENT_ERROR: 'patient/NEW_PATIENT_ERROR',
};

export const newPatientActions = {
   newPatient: (data: NewPatientDto) => ({
       type: newPatientTypes.NEW_PATIENT_REQUEST,
       payload: data,
   }),
   newPatientSuccess: (data: AxiosResponse) => ({
       type: newPatientTypes.NEW_PATIENT_SUCCESS,
       payload: data,
   }),
   newPatientError: (error: AxiosError) => ({
       type: newPatientTypes.NEW_PATIENT_ERROR,
       payload: error,
   }),
};

interface actionProps {
   type?: string;
   payload?: AxiosError | AxiosResponse<Patient>;
}

const initialState: InitialNewPatientStateProps = {
   patient: undefined,
   loading: false,
   error: undefined,
};

export const newPatientReducer = (state = initialState, action: actionProps) => {
   switch (action.type) {
       case newPatientTypes.NEW_PATIENT_REQUEST:
           return {...state, loading: true};
       case newPatientTypes.NEW_PATIENT_SUCCESS:
           return {...state, loading: false, patient: action.payload};
       case newPatientTypes.NEW_PATIENT_ERROR:
           return {
               ...state,
               loading: false,
               patient: undefined,
               error: action.payload,
           };
       default:
           return state;
   }
};