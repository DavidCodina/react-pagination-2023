import React, { createContext, useContext } from 'react'

export interface AppContextValue {
  testString: string
  // [key: string]: any;
}

export const AppContext = createContext({} as AppContextValue)
export const AppConsumer = AppContext.Consumer

export const AppProvider = (props: { children: React.ReactNode }) => {
  const testString = 'AppContext is connected.'
  return (
    <AppContext.Provider value={{ testString }}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const value = useContext(AppContext)
  return value
}
