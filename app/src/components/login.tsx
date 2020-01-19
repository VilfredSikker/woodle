import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { saveJwtTokenToStorage } from "./../utils/auth";
import { useAppContextProvider } from "./context/app-context";
import TextField from '@material-ui/core/TextField'

const Login = () => {
  const { jwtToken, lang, theme,  updateAppContext } = useAppContextProvider()
  const [state, setState] = useState(() => {
    const defaultState = {
      username: "",
      password: "",
      signedIn: false
    };

    return defaultState;
  });

  async function saveJwtOnLogin() {
    await Auth.currentSession()
      .then(data => {
        let accessToken = data.getAccessToken();
        let jwt: string = accessToken.getJwtToken();

        updateAppContext({
          jwtToken:jwt, lang, theme
        })

        saveJwtTokenToStorage(jwt);
      })
      .catch(err => console.log("Current session error: ", err));

      console.log(jwtToken)
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
          saveJwtOnLogin();
        })
        .catch(err => {
          saveJwtTokenToStorage(null);
          console.log("error with sign in: ", err);
        });
    } else {
      console.log("Already signed in");
    }
  }

  return (
    <div>
      {state.signedIn ? (
        <h1>You have signed in</h1>
      ) : (
        <form onSubmit={e => handleSubmit(e)}>
          <label>Username</label>
          <TextField 
            id="username" 
            error
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
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
