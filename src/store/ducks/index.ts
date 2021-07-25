import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import {signinReducer as signin} from './Auth/Signin';
import {newPatientReducer as newPatient} from './Patient/NewPatient';

const createRootReduces = (history: History) => combineReducers({
    router: connectRouter(history),
    signin,
    newPatient,
})

export default createRootReduces;