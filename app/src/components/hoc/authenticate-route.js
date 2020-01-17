import React from "react";
import { Redirect } from "react-router-dom";
import { isSignedIn } from "../../utils/auth";

export default WrappedComponent => props => {
  const signedIn = isSignedIn()

  if (!signedIn) {
    console.log("Not signed in, redirecting")
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: props.location.pathname
        }}
      />
    );
  }
  return <WrappedComponent signedIn={signedIn} {...props} />;
};
