import React, { createContext, useContext, useState, useEffect } from "react";
import { getJwtTokenFromStorage } from "../../utils/auth";

interface StateValues {
  jwtToken: string,
  theme: string,
  lang: string
}

interface AppContextValues {
  jwtToken: string,
  theme: string,
  lang: string,
  updateAppContext: (newState : StateValues) => void 
}

const appContextValues : AppContextValues = {
  jwtToken: "",
  theme: "light",
  lang: "dk",
  updateAppContext: () => {}
}

export const AppContext = createContext(appContextValues);

export const AppContextProvider = (props:any) => {

  const [state, setState] = useState<StateValues>(() => appContextValues)

  function updateAppContext(newState:StateValues){
    console.log("updateAppContext is called", newState)
    setState(newState)
  }

  const { jwtToken, theme, lang } = state
  const values : AppContextValues = { jwtToken, theme, lang , updateAppContext}

  useEffect(() => {
    const storageJwt = getJwtTokenFromStorage()
    
    if (storageJwt != null){
      setState({...state, jwtToken:storageJwt})
    }

  }, [])
  
  return (
    <AppContext.Provider value={values} {...props}/>
  );
};

export const useAppContextProvider = () => useContext(AppContext)
