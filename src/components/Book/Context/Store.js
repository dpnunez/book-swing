import React, { createContext, useReducer } from 'react'
import reducers, { defaultValues } from './reducers'

export const Store = createContext()

const StoreProvider = ({ children }) => {
  const [store, actions] = useReducer(reducers, defaultValues)

  return <Store.Provider value={[store, actions]}>{children}</Store.Provider>
}

export default StoreProvider