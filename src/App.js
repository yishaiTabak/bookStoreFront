import React from "react";
import LoginContextProvider from "./context/LoginContext";
import MainRouter from "./routers/MainRouter";

const App = () =>(
    <LoginContextProvider>
        <MainRouter />
    </LoginContextProvider>
)

export default App