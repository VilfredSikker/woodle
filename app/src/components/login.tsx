import { Auth } from 'aws-amplify'
import React, { useState } from 'react'

const Login = () => {
    const [state, setState] = useState(() => {
        const defaultState = {
            username: '',
            password: '',
            signedIn: false
        }

        return defaultState
    })

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { username, password, signedIn } = state

        if (!signedIn) {
            Auth.signIn({
                username: username,
                password: password
            })
                .then(() => {
                    setState({ ...state, signedIn: true })
                    console.log("Signed in")
                })
                .catch(err => console.log("error with sign in: ", err))

            // Auth.confirmSignIn(username)
            //     .then(() => console.log("confirmed sign in"))
            //     .catch(err => console.log("error with confirm: ", err))
        } else {
            console.log("Already signed in")
        }
        console.log("state: ", state)
    }

    return (
        <div>
            {state.signedIn ?
                <h1>You have signed in</h1>
                :
                <form onSubmit={e => handleSubmit(e)}>
                    <label>Username</label>
                    <input type="text" name="username" onChange={e => setState({ ...state, username: e.target.value })} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={e => setState({ ...state, password: e.target.value })} />
                    <button>Sign in</button>
                </form>
            }
        </div>
    )
}

export default Login;