import React from 'react'
import LoginForm from '../common/form/Form'
import { ReactComponent as LoginBackgroundImageDesktop } from '../../assets/SVG/login-template.svg';
import { ReactComponent as LoginBackgroundImageMobile } from '../../assets/SVG/login-background-image.svg';
import port from '../../utils/port';

import './Login.scss'

const [ VIEWPORT_WIDTH, VIEWPORT_HEIGHT ] = port();

const Login = () => (
  <div className="demo-login-container">
    <div className="demo-login-background">
      {VIEWPORT_WIDTH >= 1200 ? (
        <LoginBackgroundImageDesktop />
      ) : (
        <LoginBackgroundImageMobile />
      )}
    </div>
    <div className="demo-login-form">
      <LoginForm />
    </div>
  </div>
  );

export default Login;
