import { Auth } from 'aws-amplify'

export async function isSignedIn() {
    let loggedIn = false
    
    await Auth.currentAuthenticatedUser()
        .then(user => {
            console.log("Signed in: ", user)
            loggedIn = true
        })
        .catch(err => {
            console.log("error with fetching currentAuthenticatedUser: ", err)
            loggedIn = false
        })
    console.log("logged in: ", loggedIn)
    return loggedIn
}

export function saveJwtTokenToStorage(jwtToken) {
    sessionStorage.setItem('jwtToken', jwtToken)
}

export function getJwtTokenFromStorage() {
    return sessionStorage.getItem('jwtToken')
}

export async function getUser() {
    console.log("Getting user")
    let currentUser;

    await Auth.currentAuthenticatedUser()
        .then(user => currentUser=user)
        .catch(err => {
            currentUser = undefined
            console.log("getUser error: ", err)
        })

    return currentUser
}

export const logout = () => {
    console.log("Signing out")
    saveJwtTokenToStorage(null)
    Auth.signOut().then(data => console.log("Logout successful, data: ", data)).catch(err => console.log("Sign out failed: ", err))
}