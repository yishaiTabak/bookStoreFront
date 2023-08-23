import React, { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { handleUserData } from "../../utils/userFormUtils";
import { useNavigate } from "react-router-dom";


const LoginForm = ({loginRequest,title, handleCart}) => {
    const {setLoginState} = useContext(LoginContext)

    const [isValidDetails, setIsValidDetails] = useState(true)

    const navigate = useNavigate()
    const onSubmit = async(event) =>{
        event.preventDefault()
        const email = event.target.children[1].value.trim()
        const password = event.target.children[2].value.trim()
        const userData = await loginRequest(email, password)
        
        if(!userData){
            setIsValidDetails(false)
        }
        else if(userData.user.role === "admin"){
            handleUserData(userData, setLoginState, ()=>{})
            navigate("/admins/dashboard")
        }
        else{
            await handleUserData(userData, setLoginState, handleCart)
        }
    }

    return(
        <form className="login-form" onSubmit={onSubmit}>
            <h2 className="login-title">{title}</h2>
            <input type="text" className="login-input" placeholder="email" />
            <input type="password" className="login-input" placeholder="password" />
            {!isValidDetails && <div className="invalid-message">email or password is incorrect!</div>}
            <button type="submit" className="login-button">Login</button>
        </form>
)
}

export default LoginForm