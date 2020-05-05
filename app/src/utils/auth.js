import { Auth } from "aws-amplify"
import { ToastsStore } from "react-toasts"

export function isSignedIn(jwtToken) {
  const loggedIn = jwtToken === "" || jwtToken === "null" ? false : true
  return loggedIn
}

export function saveJwtTokenToStorage(jwtToken) {
  sessionStorage.setItem("jwtToken", jwtToken)
}

export function getJwtTokenFromStorage() {
  const token = sessionStorage.getItem("jwtToken")
  return token
}

export const logout = () => {
  saveJwtTokenToStorage("")

  Auth.signOut()
    .then((data) => ToastsStore.success("Successfully signed out"))
    .catch((err) => ToastsStore.error("Sign out failed"))
}
