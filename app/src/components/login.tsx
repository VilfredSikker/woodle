import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { saveJwtTokenToStorage } from "./../utils/auth";

const Login = () => {
  const [state, setState] = useState(() => {
    const defaultState = {
      username: "",
      password: "",
      signedIn: false
    };

    return defaultState;
  });

  function saveJwtOnLogin() {
    Auth.currentSession()
      .then(data => {
        let accessToken = data.getAccessToken();
        let jwt: any = accessToken.getJwtToken();

        console.log("access token: ", accessToken);
        console.log("jwt token: ", jwt);
        saveJwtTokenToStorage(jwt);
      })
      .catch(err => console.log("Current session error: ", err));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { username, password, signedIn } = state;
    console.log("state: ", state);
    if (!signedIn) {
      Auth.signIn({
        username: username,
        password: password
      })
        .then(() => {
          setState({ ...state, signedIn: true });
          console.log("Signed in");
          saveJwtOnLogin();
        })
        .catch(err => {
          saveJwtTokenToStorage(null);
          console.log("error with sign in: ", err);
        });
    } else {
      console.log("Already signed in");
    }

    console.log("state: ", state);
  }

  return (
    <div>
      {state.signedIn ? (
        <h1>You have signed in</h1>
      ) : (
        <form onSubmit={e => handleSubmit(e)}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={e => setState({ ...state, username: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={e => setState({ ...state, password: e.target.value })}
          />
          <button>Sign in</button>
        </form>
      )}
    </div>
  );
};

export default Login;
