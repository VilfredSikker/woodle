import React from "react";
import { Redirect } from "react-router-dom";
import { getJwtTokenFromStorage, isSignedIn } from "../../utils/auth";
import { useAppContextProvider } from "../context/app-context";

export default WrappedComponent => props => {
  const { jwtToken } = useAppContextProvider()

  if (!isSignedIn(jwtToken)) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: props.location.pathname
        }}
      />
    );
  }
  return <WrappedComponent jwtToken={jwtToken} {...props} />;
};
