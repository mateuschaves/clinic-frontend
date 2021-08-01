import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { signinReducer as signin } from './Auth/Signin';
import { newPatientReducer as newPatient } from './Patient/NewPatient';
import { listPatientReducer as listPatient } from './Patient/ListPatient';
import { removePatientReducer as removePatient } from './Patient/RemovePatient';

const createRootReduces = (history: History) => combineReducers({
    router: connectRouter(history),
    signin,
    newPatient,
    listPatient,
    removePatient,
})

export default createRootReduces;