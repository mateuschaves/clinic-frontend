import { AxiosError, AxiosResponse } from 'axios';
 
import { RemovePatientDto } from '~/shared/dto/Patient/remove-patient.dto';

import { InitialRemovePatientStateProps } from '../../../shared/store/app.state';

export const removePatientTypes = {
   REMOVE_PATIENT_REQUEST: 'patient/REMOVE_PATIENT_REQUEST',
   REMOVE_PATIENT_SUCCESS: 'patient/REMOVE_PATIENT_SUCCESS',
   REMOVE_PATIENT_ERROR: 'patient/REMOVE_PATIENT_ERROR',
};

export const removePatientActions = {
   removePatient: (data: RemovePatientDto) => ({
       type: removePatientTypes.REMOVE_PATIENT_REQUEST,
       payload: data,
   }),
   removePatientSuccess: (data: AxiosResponse) => ({
       type: removePatientTypes.REMOVE_PATIENT_SUCCESS,
       payload: data,
   }),
   removePatientError: (error: AxiosError) => ({
       type: removePatientTypes.REMOVE_PATIENT_ERROR,
       payload: error,
   }),
};

interface actionProps {
   type?: string;
   payload?: AxiosError | AxiosResponse<undefined>;
}

const initialState: InitialRemovePatientStateProps = {
   response: undefined,
   loading: false,
   error: undefined,
};

export const removePatientReducer = (state = initialState, action: actionProps) => {
   switch (action.type) {
       case removePatientTypes.REMOVE_PATIENT_REQUEST:
           return {...state, loading: true};
       case removePatientTypes.REMOVE_PATIENT_SUCCESS:
           return {...state, loading: false, response: action.payload};
       case removePatientTypes.REMOVE_PATIENT_ERROR:
           return {
               ...state,
               loading: false,
               response: undefined,
               error: action.payload,
           };
       default:
           return state;
   }
};