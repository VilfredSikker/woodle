import { API, Auth, graphqlOperation } from "aws-amplify"
import { useFormik } from "formik"
import React, { useContext } from "react"
import * as mutations from "../../../graphql/mutations"
import * as queries from "../../../graphql/queries"
import { saveJwtTokenToStorage } from "../../../utils/auth"
import StyledButton from "../../basics/button/button"
import InputField from "../../basics/input-field/input-field"
import { AppContext } from "../../context/app-context"
import LoginLayout from "../../layout/login-layout/login-layout"

const FormikSignIn = (props: any) => {
  const { setContextState } = useContext(AppContext)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      Auth.signIn({
        username: values.username,
        password: values.password,
      })
        .then((e) => {
          return addUserToDB(values.username)
        })
        .then((e) => {
          return saveJwtOnLogin()
        })
        .then((e) => {
          props.history.push("/app/map")
        })
        .catch((err) => console.log("error with sign up ", err))
    },
  })

  async function addUserToDB(username: string) {
    const filter = {
      username: {
        eq: username,
      },
    }

    await API.graphql(graphqlOperation(queries.listUsers, { filter: filter }))
      .then((result: any) => {
        let items = result.data.listUsers.items

        // username is a unique name, which is why this is safe
        if (items.length > 0) {
          let user = items[0]
          console.log("User: ", user)
          setContextState({ user: user })
        } else {
          const input = {
            username: username,
          }

          console.log("no user found, creating user")
          API.graphql(graphqlOperation(mutations.createUser, { input: input }))
            .then((result: any) => {
              let newUser = result.data.createUser
              console.log("New User: ", newUser)
              setContextState({ user: newUser })
            })
            .catch((e: any) => console.log("Couldn't create user: ", e))
        }
      })
      .catch((e: any) => console.log("Error when adding user to db: ", e))
  }

  async function saveJwtOnLogin() {
    await Auth.currentSession()
      .then((data) => {
        let accessToken = data.getAccessToken()
        let jwt: string = accessToken.getJwtToken()

        setContextState({ jwtToken: jwt })

        saveJwtTokenToStorage(jwt)
      })
      .catch((err) => console.log("Current session error: ", err))
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
