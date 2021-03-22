import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import LoadingOverlay from '../../loading/LoadingOverlay';

import './Form.scss';

const LoginForm = ({ onSubmit, loading }) => (
  <div className="demo-form-container">
    <div className="demo-login-header">
      <h1 className="demo-login-header-text">ΣΥΝΔΕΣΗ</h1>
    </div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Δ/νση Ηλεκτρονικού Ταχυδρομείου</label>
        </div>
        <Field
          id="email"
          name="email"
          placeholder="john@doe.com"
          type="email"
        />

        <div>
          <label htmlFor="password">Κωδικός Πρόσβασης</label>
        </div>
        <Field
          id="password"
          name="password"
          placeholder="your password"
          type="password"
        />
        <div className="demo-form-button-container">
          <button type="submit">Είσοδος</button>
        </div>
        <div className="demo-loading-overlay">
          <LoadingOverlay loading={loading} />
        </div>
        <div className="demo-form-forgot-password">
          <Link to='/password-forgot'><p className="demo-form-forgot-password-text">Ξέχασα τον κωδικό μου</p></Link>
        </div>
      </Form>
    </Formik>
  </div>
);

export default LoginForm;
