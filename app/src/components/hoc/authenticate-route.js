import React from "react"
import { Redirect } from "react-router-dom"
import { isSignedIn } from "../../utils/auth"
import { useAppContextProvider } from "../context/app-context"

export default WrappedComponent => props => {
  const { jwtToken } = useAppContextProvider()

  if (!isSignedIn(jwtToken)) {
    console.log("Not logged in: ", jwtToken)
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: props.location.pathname
        }}
      />
    )
  }
  return <WrappedComponent jwtToken={jwtToken} {...props} />
}
