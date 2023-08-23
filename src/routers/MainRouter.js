import React, { useContext } from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import LoginContextProvider, { LoginContext } from "../context/LoginContext";
import AdminRouter from "./AdminRoutes";
import UserRoutes from "./UserRoutes";

const MainRouter = ()=>{
    const {loginState} = useContext(LoginContext)

    return (
        <BrowserRouter>
        <LoginContextProvider>
        <Routes>
            {!(loginState?.user.role==="admin") && <Route path="/*" element={<UserRoutes />} />}
            {!(loginState?.user.role==="user") && <Route path="/admins/*" element={<AdminRouter />} />}
            {loginState?.user.role ==="admin" && <Route path="/*" element={<Navigate to="/admins/dashboard" replace />} />}
        </Routes>
        </LoginContextProvider>
        </BrowserRouter>
    )
}

export default MainRouter