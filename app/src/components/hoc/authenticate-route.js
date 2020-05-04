import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import { isSignedIn } from "../../utils/auth"
import { AppContext } from "../context/app-context"

export default (WrappedComponent) => (props) => {
  const { contextState } = useContext(AppContext)
  const { jwtToken } = contextState
  if (!isSignedIn(jwtToken)) {
    console.log("Not logged in: ", jwtToken)
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: props.location.pathname,
        }}
      />
    )
  }
  return <WrappedComponent jwtToken={jwtToken} {...props} />
}
