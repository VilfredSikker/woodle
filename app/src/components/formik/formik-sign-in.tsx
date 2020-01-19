import { Auth } from "aws-amplify";
import { useFormik } from "formik";
import React, { useState } from "react";
import { saveJwtTokenToStorage } from "../../utils/auth";
import { Redirect } from "react-router-dom";
import { useAppContextProvider } from "../context/app-context";

const FormikSignIn = (props:any) => {
  const { jwtToken, lang, theme,  updateAppContext } = useAppContextProvider()
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
        saveJwtOnLogin()
        props.history.push("/profile")
      })
      .catch(err => console.log("error with sign up ", err));
    }
  });

  async function saveJwtOnLogin() {
    await Auth.currentSession()
      .then(data => {
        let accessToken = data.getAccessToken();
        let jwt: string = accessToken.getJwtToken();
  
        updateAppContext({
          jwtToken:jwt, lang, theme
        })
  
        saveJwtTokenToStorage(jwt);
        props.history.push("/profile")
      })
      .catch(err => console.log("Current session error: ", err));
  
      console.log(jwtToken)
  }
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
