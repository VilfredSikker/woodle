import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import React, { useState } from "react";
import { saveJwtTokenToStorage } from "../../utils/auth";
import { Redirect } from "react-router-dom";

const FormikSignIn = (props:any) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      Auth.signIn({
        username: values.username,
        password: values.password,
      })
      .then(() => {
        saveJwtTokenToStorage()
        props.history.push("/profile")
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default FormikSignIn;
