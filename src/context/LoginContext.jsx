import React, { createContext, useState } from "react";
import { getUserFromCookie } from "../cookies/cookies";


export const LoginContext = createContext()
const LoginContextProvider = (props) => {
    const userData = getUserFromCookie()
    const [loginState, setLoginState] = useState(userData)

    return (
        <LoginContext.Provider value={{loginState,setLoginState}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider