import { React } from 'react';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { actions as appStateActions } from './store/appState';
import { actions as userActions } from './store/user';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import PasswordForgot from './components/passwordForgot/PasswordForgot';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector(store => {
    return store.appState;
  }, shallowEqual)

   // Track page state on initial load
   useEffect(() => {
    if (appState && !appState.isLoaded) {
      dispatch(appStateActions.setAppState());
    }
  }, [appState, dispatch]);

  return (
    <Router>
      <Switch>
        <Route component={Login} exact path='/login' />
        <Route component={Dashboard} exact path='/dashboard' />
        <Route component={PasswordForgot} exact path='/password-forgot' />
        <Redirect to='/login' />
      </Switch>
    </Router>
  );
};

export default App;
