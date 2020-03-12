import React, { createContext, useContext, useState, useEffect } from "react"
import { getJwtTokenFromStorage } from "../../utils/auth"

interface StateValues {
  jwtToken: string
  theme: string
  lang: string
  user: string
  userId?: string
}

interface AppContextValues {
  jwtToken: string
  theme: string
  lang: string
  user: string
  userId?: string
  updateAppContext: (newState: StateValues) => void
}

const appContextValues: AppContextValues = {
  jwtToken: "",
  theme: "light",
  lang: "dk",
  user: "",
  userId: "",
  updateAppContext: () => {}
}

export const AppContext = createContext(appContextValues)

export const AppContextProvider = (props: any) => {
  const [state, setState] = useState<StateValues>(() => appContextValues)

  function updateAppContext(newState: StateValues) {
    console.log("update context new state: ", newState)
    setState(newState)
  }

  const { jwtToken, theme, lang, user, userId } = state
  const values: AppContextValues = {
    jwtToken,
    theme,
    lang,
    user,
    userId,
    updateAppContext
  }

  useEffect(() => {
    var storageJwt: string | null = ""

    if (state.jwtToken === "") {
      console.log("New storage key")
      storageJwt = getJwtTokenFromStorage()
    }

    if (storageJwt != null) {
      setState({ ...state, jwtToken: storageJwt })
    }
  }, [])

  return <AppContext.Provider value={values} {...props} />
}

export const useAppContextProvider = () => useContext(AppContext)
