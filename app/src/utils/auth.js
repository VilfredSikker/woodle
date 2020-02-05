import { Auth } from "aws-amplify"

export function isSignedIn(jwtToken) {
  const loggedIn = jwtToken === "" || jwtToken === "null" ? false : true
  console.log("is signed in? ", jwtToken, loggedIn)
  return loggedIn
}

export function saveJwtTokenToStorage(jwtToken) {
  sessionStorage.setItem("jwtToken", jwtToken)
}

export function getJwtTokenFromStorage() {
  const token = sessionStorage.getItem("jwtToken")
  console.log("returning token: ", token)
  return token
}

export async function getUser() {
  console.log("Getting user")
  let currentUser

  await Auth.currentAuthenticatedUser()
    .then(user => (currentUser = user))
    .catch(err => {
      currentUser = undefined
      console.log("getUser error: ", err)
    })

  return currentUser
}

export const logout = () => {
  console.log("Signing out")
  saveJwtTokenToStorage("")

  Auth.signOut()
    .then(data => console.log("Logout successful, data: ", data))
    .catch(err => console.log("Sign out failed: ", err))
}
