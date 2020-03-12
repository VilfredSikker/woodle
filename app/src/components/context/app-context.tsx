import React, { createContext, useContext, useState, useEffect } from "react"
import { getJwtTokenFromStorage } from "../../utils/auth"

interface StateValues {
  jwtToken: string
  theme: string
  lang: string
  user: object
}

interface AppContextValues {
  jwtToken: string
  theme: string
  lang: string
  user: object
  updateAppUser: (user: object) => void
  updateAppJwt: (jwt: string) => void
}

const appContextValues: AppContextValues = {
  jwtToken: "",
  theme: "light",
  lang: "dk",
  user: {},
  updateAppUser: () => {},
  updateAppJwt: () => {}
}

export const AppContext = createContext(appContextValues)

export const AppContextProvider = (props: any) => {
  const [state, setState] = useState<StateValues>(() => appContextValues)

  function updateAppUser(user: object) {
    console.log("current state: ", state)
    console.log("Updating app user: ", user)
    setState({ ...state, user: user })
  }

  function updateAppJwt(jwt: string) {
    console.log("current state: ", state)
    console.log("Updating app jwt", jwt)
    setState({ ...state, jwtToken: jwt })
  }

  const { jwtToken, theme, lang, user } = state
  const values: AppContextValues = {
    jwtToken,
    theme,
    lang,
    user,
    updateAppUser,
    updateAppJwt
  }

  useEffect(() => {
    var storageJwt: string | null = ""

    if (state.jwtToken === "") {
      console.log("New storage key")
      storageJwt = getJwtTokenFromStorage()
    }

    if (storageJwt != null) {
      console.log("storageJwt != null")
      setState({ ...state, jwtToken: storageJwt })
    }
  }, [])

  return <AppContext.Provider value={values} {...props} />
}

export const useAppContextProvider = () => useContext(AppContext)
