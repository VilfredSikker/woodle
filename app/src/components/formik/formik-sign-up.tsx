import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import React from "react";
import { Redirect } from "react-router-dom";

const FormikSignUp = (props:any) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    },
    onSubmit: values => {
      Auth.signUp({
        username: values.username,
        password: values.password,
        attributes: {
          email: values.email
        }
      })
      .then(() => {
        console.log("Signed up")
        props.history.push("/confirm-sign-up")
      })
      .catch(err => console.log("error with sign up ", err));
      
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default FormikSignUp;
