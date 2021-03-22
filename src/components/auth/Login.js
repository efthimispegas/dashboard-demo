import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import LoginForm from '../common/form/Form'
import { ReactComponent as LoginBackgroundImageDesktop } from '../../assets/SVG/login-template.svg';
import { ReactComponent as LoginBackgroundImageMobile } from '../../assets/SVG/login-background-image.svg';
import port from '../../utils/port';
import { actions as userActions } from '../../store/user';
import { actions as loadingActions } from '../../store/loading';

import './Login.scss'

const [ VIEWPORT_WIDTH, VIEWPORT_HEIGHT ] = port();

const Login = () => {
  const dispatch = useDispatch();

  let user = useSelector((store) => {
    return store.user.data;
  }, shallowEqual);
  const isUserloading = useSelector((store) => {
    return store.user.loading;
  });
  const loading = useSelector((store) => {
    return store.loading.loading;
  });

  const onSubmit = async values => {
    dispatch(userActions.setLoading());
    dispatch(loadingActions.setLoading());
    const { email, password } = values;
    if (!email || !password) {
      alert('Email or password field is empty');
      console.log(values)
      return;
    }
    await new Promise((r) => setTimeout(r, 500)).then(() => {
      user = {
        email: values.email,
        password: values.password
      };

      console.log(user)
      dispatch(userActions.setUser(user));
    }).catch(err => {
      alert(err);
      dispatch(userActions.setError(err));
      // Reset user loading state if there is anerror
      dispatch(userActions.resetLoading());
      // Reset page loading if there is an error
      dispatch(loadingActions.resetLoading());
    }).finally(() => {
      dispatch(userActions.resetLoading());
      dispatch(loadingActions.resetLoading());
    });
  };

  return (
    <div className="demo-login-container">
      <div className="demo-login-background">
        {VIEWPORT_WIDTH >= 1200 ? (
          <LoginBackgroundImageDesktop />
        ) : (
          <LoginBackgroundImageMobile />
        )}

      </div>
      <div className="demo-login-form">
        <LoginForm
          onSubmit={ onSubmit }
        />
      </div>
    </div>
    );
  };

export default Login;
