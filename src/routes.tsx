import {
  Router,
  Switch,
  Route,
} from "react-router";

import { ConnectedRouter } from 'connected-react-router'

import { history } from "./store";

import Signin from '~/pages/Signin';
import Home from '~/pages/Home';
import NewPatient from '~/pages/NewPatient';

export default function Routes() {
  return (
    <ConnectedRouter history={history}>
        <Switch>
          <Route
            exact
            path="/"
            component={Signin}
          />
          <Route 
            path="/signin"
            component={Signin}
          />
          <Route 
            path="/home"
            component={Home}
          />
          <Route
            path="/new-patient"
            component={NewPatient}
          />
        </Switch>
    </ConnectedRouter>
  )
}
