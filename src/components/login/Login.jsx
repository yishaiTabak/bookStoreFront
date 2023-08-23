import React, { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { login } from "../../server/userRequests";
import { LoginContext } from "../../context/LoginContext";
import LoginForm from "../formComponents/LoginForm";
import { CartContext } from "../../context/CartContext";
import { handleCartOnLogin } from "../../userCart/userCart";

const Login = () =>{
    const {loginState} = useContext(LoginContext)
    const {cartItems, setCartItems} = useContext(CartContext)

    const handleCart = async (userData)=>{
        await handleCartOnLogin(userData, cartItems,setCartItems)
    }

    return (
        loginState? <Navigate to="/home" replace/>:
        <div className="login-container">
            <LoginForm  loginRequest={login} title={"login"} handleCart={handleCart}/>
            <div className="not-have-account">
                don't have an account? <NavLink to={'/sign-up'}>sign up</NavLink>
            </div>
        </div>
    )
}

export default Login