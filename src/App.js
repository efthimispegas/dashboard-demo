import { React } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import PasswordForgot from './components/passwordForgot/PasswordForgot';

const App = () => {
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
