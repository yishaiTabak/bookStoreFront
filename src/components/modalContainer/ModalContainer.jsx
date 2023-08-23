import React from "react";

const ModalContainer = ({children}) =>{

    return (
        <div className="modal-container">
            <div className="modal">{children}</div>
        </div>
    )
}

export default ModalContainer