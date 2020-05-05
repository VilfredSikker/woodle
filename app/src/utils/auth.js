import { Auth } from "aws-amplify"

export function isSignedIn(jwtToken) {
  const loggedIn = jwtToken === "" || jwtToken === "null" ? false : true
  return loggedIn
}

export function saveJwtTokenToStorage(jwtToken) {
  sessionStorage.setItem("jwtToken", jwtToken)
}

export function getJwtTokenFromStorage() {
  const token = sessionStorage.getItem("jwtToken")
  console.log("getJwtTokenFromStorage ", token)
  return token
}

export const logout = () => {
  console.log("Signing out")
  saveJwtTokenToStorage("")

  Auth.signOut()
    .then((data) => console.log("Logout successful, data: ", data))
    .catch((err) => console.log("Sign out failed: ", err))
}
