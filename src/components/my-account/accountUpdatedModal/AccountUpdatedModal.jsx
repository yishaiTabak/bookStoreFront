import React from "react";
import ModalContainer from "../../modalContainer/ModalContainer";

const AccountUpdatedModal = ({setModal}) =>(
    <ModalContainer>
        <div className="modal-text">
        Your details have been changed successfuly
        </div>
        <button
        onClick={setModal}
        className="close"
        >
        close
        </button>
    </ModalContainer>
)

export default AccountUpdatedModal