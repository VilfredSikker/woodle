import { Auth } from 'aws-amplify'

export const isSignedIn = () => {
    console.log("Check isSignedIn")
    let loggedIn = false
    
    Auth.currentAuthenticatedUser()
        .then(user => {
            console.log("Signed in: ", user)
            loggedIn = true
        })
        .catch(err => {
            console.log("error with fetching currentAuthenticatedUser: ", err)
            loggedIn = false
        })

    console.log("Signed in = ", loggedIn)

    return loggedIn
}

export const getUser = () => {
    console.log("Getting user")
    let user;

    Auth.currentAuthenticatedUser()
        .then(user => user = user)
        .catch(err => {
            user = undefined
            console.log("getUser error: ", err)
        })

    return user
}

export const logout = () => {
    console.log("Signing out")
    Auth.signOut().then(data => console.log("Logout successful, data: ", data)).catch(err => console.log("Sign out failed: ", err))
}