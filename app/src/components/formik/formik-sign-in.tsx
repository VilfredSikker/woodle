import { Auth } from "aws-amplify"
import { useFormik } from "formik"
import React from "react"
import { saveJwtTokenToStorage } from "../../utils/auth"
import StyledButton from "../basics/button/button"
import InputField from "../basics/input-field/input-field"
import { useAppContextProvider } from "../context/app-context"
import LoginLayout from "../layout/login-layout/login-layout"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import * as mutations from "../../graphql/mutations"
import * as queries from "../../graphql/queries"

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
          addUserToDB(values.username)
          saveJwtOnLogin()
        })
        .catch(err => console.log("error with sign up ", err))
    }
  })

  async function addUserToDB(username: string) {
    const filter = {
      username: {
        eq: username
      }
    }
    var userId: string
    console.log("add user to db")

    await API.graphql(graphqlOperation(queries.listUsers, { filter: filter }))
      .then((result: any) => {
        let items = result.data.listUsers.items

        if (items.length > 0) {
          userId = items[0].id
        } else {
          const input = {
            username: username
          }

          console.log("no user found, creating user")
          API.graphql(graphqlOperation(mutations.createUser, { input: input }))
            .then((result: any) => {
              console.log("Create user result: ", result)
              let user = result.data.createUser
              console.log("user: ", user)
              userId = user.id
            })
            .catch((e: any) => console.log("Couldn't create user: ", e))
        }
      })
      .then(() => {
        console.log("User id: ", userId)
        updateAppContext({
          jwtToken,
          lang,
          user,
          theme,
          userId: userId
        })
      })
      .catch((e: any) => console.log("Error when adding user to db: ", e))
  }

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
