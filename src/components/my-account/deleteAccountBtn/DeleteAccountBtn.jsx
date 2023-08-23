import React, { useContext, useState } from "react";
import { deleteUserFromCookie } from "../../../cookies/cookies";
import { LoginContext } from "../../../context/LoginContext";

const DeleteAccountBtn = ({deleteRequest, showDeletedModal}) =>{
    const {loginState,setLoginState} = useContext(LoginContext)

    const [isWantDeleteHidden, setIsWantDeleteHidden] = useState(true)

    const onDelete = async()=>{
        await deleteRequest(loginState.token)
        showDeletedModal(false)
        setTimeout(()=>{
            setLoginState(null)
            deleteUserFromCookie()
        },5000)
    }

    return(
        <div className="delete-container">
            <button onClick={()=>{setIsWantDeleteHidden(false)}} className="delete-account">delete your account</button>
            {!isWantDeleteHidden && 
            <div className="want-to-delete">
                <div>your details is about to be deleted, are you sure?</div>
                <div className="buttons-container">
                <button className="no-btn" onClick={()=>{setIsWantDeleteHidden(true)}}>No</button>
                <button className="yes-btn" onClick={onDelete}>Yes</button>
                </div>
            </div> }
        </div>
    )
}

export default DeleteAccountBtn