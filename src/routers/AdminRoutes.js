import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminSignUp from "../components/admins/adminSignUp/AdminSignUp";
import AdminDashboardLoader from "../components/admins/adminDashboard/AdminDashboardLoader";
import MyAccount from "../components/my-account/MyAccount";
import WrongPages from "../components/wrongPages/WrongPages";
import AdminHeader from "../components/admins/adminHeader/AdminHeader";

const AdminRouter = () =>{
    return (
        <>
        <AdminHeader />
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />}/>
            <Route path="/sign-up" element={<AdminSignUp />} />
            <Route path="/dashboard" element={<AdminDashboardLoader />} />
            <Route path="/accounts" element={<MyAccount />}/>
            <Route path="/*" element={<WrongPages message={"404 page not found"} />} />

        </Routes>
        </>
    )
}

export default AdminRouter