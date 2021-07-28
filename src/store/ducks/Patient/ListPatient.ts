import { AxiosError, AxiosResponse } from 'axios';
 
import { InitialListPatientStateProps } from '~/shared/store/app.state';
import { PatientPaginated } from '~/shared/types/entity';
import { ListPatientDto } from '~/shared/dto/Patient/list-patient.dto';

export const listPatientTypes = {
   LIST_PATIENT_REQUEST: 'patient/LIST_PATIENT_REQUEST',
   LIST_PATIENT_SUCCESS: 'patient/LIST_PATIENT_SUCCESS',
   LIST_PATIENT_ERROR: 'patient/LIST_PATIENT_ERROR',
};

export const listPatientActions = {
   listPatient: (data: ListPatientDto) => ({
       type: listPatientTypes.LIST_PATIENT_REQUEST,
       payload: data,
   }),
   listPatientSuccess: (data: PatientPaginated) => ({
       type: listPatientTypes.LIST_PATIENT_SUCCESS,
       payload: data,
   }),
   listPatientError: (error: AxiosError) => ({
       type: listPatientTypes.LIST_PATIENT_ERROR,
       payload: error,
   }),
};

interface actionProps {
   type?: string;
   payload?: AxiosError | PatientPaginated;
}

const initialState: InitialListPatientStateProps = {
   patients: undefined,
   loading: false,
   error: undefined,
};

export const listPatientReducer = (state = initialState, action: actionProps) => {
   switch (action.type) {
       case listPatientTypes.LIST_PATIENT_REQUEST:
           return {...state, loading: true};
       case listPatientTypes.LIST_PATIENT_SUCCESS:
           return {...state, loading: false, patients: action.payload};
       case listPatientTypes.LIST_PATIENT_ERROR:
           return {
               ...state,
               loading: false,
               patients: undefined,
               error: action.payload,
           };
       default:
           return state;
   }
};