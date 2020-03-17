import React, { createContext, useContext, useState, useEffect } from "react"
import { getJwtTokenFromStorage } from "../../utils/auth"
import { User } from "../../shared-interfaces"

interface ContextValues {
  jwtToken: string
  theme: string
  lang: string
  user: User
}

interface ContextState {
  contextState: ContextValues
  setContextState: (partial: Partial<ContextValues>) => void
}

export interface ContextStateValues {
  jwtToken: string
  theme: string
  lang: string
  user: object
}

const defaultState: ContextValues = {
  jwtToken: "",
  theme: "light",
  lang: "dk",
  user: { id: "", username: "", friends: null, activities: null }
}

const initialValues: ContextState = {
  contextState: defaultState,
  setContextState: () => console.log("Remember to use the provider")
}

export const AppContext = createContext<ContextState>(initialValues)

export const AppContextProvider = (props: any) => {
  const [state, setState] = useState<ContextValues>(defaultState)
  const setContextState = (partial: Partial<ContextValues>) => {
    setState(prevState => ({
      ...prevState,
      ...partial
    }))
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppContext.Provider value={{ contextState: state, setContextState }}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
