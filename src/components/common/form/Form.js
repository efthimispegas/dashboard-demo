import React from 'react';
import { Formik, Field, Form } from 'formik';

import './Form.scss';

const LoginForm = () => (
  <div className="demo-form-container">
    <div className="demo-login-header">
      <h1 className="demo-login-header-text">ΣΥΝΔΕΣΗ</h1>
    </div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
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
        <div className="demo-form-forgot-password">
          <a href='#'><p className="demo-form-forgot-password-text">Ξέχασα τον κωδικό μου</p></a>
        </div>
      </Form>
    </Formik>
  </div>
);

export default LoginForm;
