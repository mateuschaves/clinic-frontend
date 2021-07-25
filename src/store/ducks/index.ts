import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import {signinReducer as signin} from './Auth/Signin';

const createRootReduces = (history: History) => combineReducers({
    router: connectRouter(history),
    signin,
})

export default createRootReduces;