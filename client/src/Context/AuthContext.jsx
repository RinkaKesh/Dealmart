import React, { useState } from 'react'
import { createContext } from 'react'
export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth]=useState(false)
    const [userDetail,setUserDetail]=useState({})
  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,userDetail,setUserDetail}} >
      {children}
    </AuthContext.Provider >
  )
}

export default AuthContextProvider
