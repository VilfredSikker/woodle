import React from "react";
import { Redirect } from "react-router-dom";
import { getJwtTokenFromStorage } from "../../utils/auth";

export default WrappedComponent => props => {
  const jwtToken = getJwtTokenFromStorage()

  if (!jwtToken) {
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
