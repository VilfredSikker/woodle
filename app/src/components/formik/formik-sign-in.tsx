import { Auth } from "aws-amplify"
import { useFormik } from "formik"
import React, { useState } from "react"
import { saveJwtTokenToStorage } from "../../utils/auth"
import { Redirect } from "react-router-dom"
import LoginLayout from "../layout/login-layout/login-layout"
import { useAppContextProvider } from "../context/app-context"
import InputField from "../basics/input-field/input-field"
import StyledButton from "../basics/button/button"

const FormikSignIn = (props: any) => {
  const { jwtToken, lang, theme, updateAppContext } = useAppContextProvider()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      Auth.signIn({
        username: values.username,
        password: values.password
      })
        .then(() => {
          saveJwtOnLogin()
        })
        .catch(err => console.log("error with sign up ", err))
    }
  })

  async function saveJwtOnLogin() {
    await Auth.currentSession()
      .then(data => {
        let accessToken = data.getAccessToken()
        let jwt: string = accessToken.getJwtToken()

        updateAppContext({
          jwtToken: jwt,
          lang,
          theme
        })

        saveJwtTokenToStorage(jwt)
        props.history.push("/app/map")
      })
      .catch(err => console.log("Current session error: ", err))

    console.log(jwtToken)
  }
  return (
    <LoginLayout>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          name="username"
          label="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <StyledButton type="submit" children={"Sign In"}></StyledButton>
      </form>
    </LoginLayout>
  )
}

export default FormikSignIn
