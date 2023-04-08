import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Login Form</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          if (values.email.length !== 0 && values.password.length !== 0) {
            navigate("/Contact");
          }
        }}
      >
        <Form>
          <label>Email: </label>
          <Field name="email" type="text" />
          <br />
          <br />
          <label>Password: </label>
          <Field name="password" type="password" />
          <br />
          <br />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPage;
