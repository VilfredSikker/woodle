import { Auth } from "aws-amplify"
import { useFormik } from "formik"
import React from "react"
import { saveJwtTokenToStorage } from "../../utils/auth"
import StyledButton from "../basics/button/button"
import InputField from "../basics/input-field/input-field"
import { useAppContextProvider } from "../context/app-context"
import LoginLayout from "../layout/login-layout/login-layout"

const FormikSignIn = (props: any) => {
  const {
    jwtToken,
    lang,
    theme,
    user,
    updateAppContext
  } = useAppContextProvider()
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
        let username: string = accessToken.payload.username

        updateAppContext({
          jwtToken: jwt,
          lang,
          user: username,
          theme
        })

        saveJwtTokenToStorage(jwt)
        props.history.push("/app/map")
      })
      .catch(err => console.log("Current session error: ", err))
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
