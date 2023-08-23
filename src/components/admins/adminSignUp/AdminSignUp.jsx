import React, { useContext } from "react";
import { postAdmin } from "../../../server/userRequests";
import UserForm from "../../formComponents/UserForm";
import { NavLink, Navigate } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";
import { validateFuncsForRegistration } from "../../../utils/userFormUtils";

const AdminSignUp = () => {
  const { loginState } = useContext(LoginContext);

  const formData = {
    title: "Registration Of Admins",
    submitText: "Sign up",
    formRequest: postAdmin,
    showModal: () => {},
    validateFuncs:validateFuncsForRegistration,
    initIsInputsValid: false,
    handleCart: () => {},
  };
  return loginState ? (
      <Navigate to="/admins/dashboard" replace />
  ) : (
    <div className="sign-up-container">
      <UserForm data={formData} />
      <div className="have-account">
        already have an account?{" "}
        <NavLink to={"/login"}>sign in</NavLink>
      </div>
    </div>
  );
};

export default AdminSignUp;
