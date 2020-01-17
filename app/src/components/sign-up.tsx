import { Auth } from 'aws-amplify'
import React, { useState } from 'react'

const SignUp = () => {
    const [state, setState] = useState(() => {
        const defaultState = {
            username: '',
            password: '',
            email: '',
            phoneNumber: '',
            confirmationCode: '',
            signedUp: false
        }

        return defaultState
    })

    function handleSubmit(e : any) {
        e.preventDefault()
        const { username, password, email, phoneNumber, signedUp, confirmationCode } = state

        if (!signedUp) {
            Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    email: email,
                    phone_number: phoneNumber
                }
            })
                .then(() => console.log("Signed up"))
                .catch(err => console.log("error with sign up ", err))

            setState({ ...state, signedUp: true, password: '' })
        } else {
            Auth.confirmSignUp(username, confirmationCode)
            .then(() => console.log("confirmed"))
            .catch(err => console.log("error with confirm: ", err))
        }
        console.log("state: ", state)
    }

    return (
        <div>
            {state.signedUp ?
                <form onSubmit={e => handleSubmit(e)}>
                    <label>Username</label>
                    <input type="text" name="username" onChange={e => setState({ ...state, username: e.target.value })} />
                    <label>Confirmation Code</label>
                    <input type="text" name="confirmationCode" onChange={e => setState({ ...state, confirmationCode: e.target.value })} />
                    <button>Confirm</button>
                </form>
                :
                <form onSubmit={e => handleSubmit(e)}>
                    <label>Username</label>
                    <input type="text" name="username" onChange={e => setState({ ...state, username: e.target.value })} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={e => setState({ ...state, password: e.target.value })} />
                    <label>Email</label>
                    <input type="text" name="email" onChange={e => setState({ ...state, email: e.target.value })} />
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={e => setState({ ...state, phoneNumber: e.target.value })} />
                    <button>Sign Up</button>
                </form>
            }
        </div>
    )
}

export default SignUp