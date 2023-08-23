import React, { useContext } from "react";
import BooksContextProvider from "../../../context/AdminBooksContext";
import AdminDashboard from "./AdminDashboard";
import { LoginContext } from "../../../context/LoginContext";
import { Navigate } from "react-router-dom";

const AdminDashboardLoader = () => {
    const {loginState} = useContext(LoginContext)
    return(
    !loginState? <Navigate to="/login" replace /> :
    <BooksContextProvider>
        <AdminDashboard/>
    </BooksContextProvider>
)}

export default AdminDashboardLoader