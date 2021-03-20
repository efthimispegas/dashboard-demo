import React from 'react'
import LoginForm from '../common/form/Form'
import { ReactComponent as LoginBackgroundImage } from '../../assets/SVG/login-template.svg';

import './Login.scss'

const Login = ({ props }) => (
  <div className="demo-login-container">
    <div className="demo-login-background">
      <LoginBackgroundImage />
    </div>
    <div className="demo-login-form">
      <LoginForm />
    </div>
  </div>
  );

export default Login;
