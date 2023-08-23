import React, { useContext } from "react";
import LoginForm from "../../formComponents/LoginForm";
import { NavLink, Navigate } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";
import { login } from "../../../server/userRequests";

const AdminLogin = () => {
  const { loginState } = useContext(LoginContext);

  return loginState ? 
      <Navigate to="/admins/dashboard" replace />
     : (
    <div className="login-container">
      <LoginForm loginRequest={login} title={"login for admins"} />
      <div className="not-have-account">
        don't have an account? <NavLink to={"/admins/sign-up"}>sign up</NavLink>
      </div>
    </div>
  );
};

export default AdminLogin;
