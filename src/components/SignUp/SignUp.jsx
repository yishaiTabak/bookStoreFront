import React, { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { postUser } from "../../server/userRequests";
import { LoginContext } from "../../context/LoginContext";
import UserForm from "../formComponents/UserForm";
import { CartContext } from "../../context/CartContext";
import { handleCartOnLogin } from "../../userCart/userCart";
import { validateFuncsForRegistration } from "../../utils/userFormUtils";

const SignUp = () => {
  const { loginState } = useContext(LoginContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleCart = async (userData) => {
    await handleCartOnLogin(userData, cartItems, setCartItems);
  };

  const formData = {
    title: "Sign Up",
    submitText: "Sign up",
    formRequest: postUser,
    showModal: () => {},
    validateFuncs: validateFuncsForRegistration,
    initIsInputsValid: false,
    handleCart,
  };

  return loginState ? (
    <Navigate to="/home" replace />
  ) : (
    <div className="sign-up-container">
      <UserForm data={formData} />
      <div className="have-account">
        already have an account? <NavLink to={"/login"}>sign in</NavLink>
      </div>
    </div>
  );
};

export default SignUp;
