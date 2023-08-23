import React from "react";
import ModalContainer from "../../modalContainer/ModalContainer";

const CheckoutModal = ({setIsCheckoutModal})=> (
    <ModalContainer>
        <div className="modal-text">
        The purchase was successfully completed
        </div>
        <button className="close" onClick={() => setIsCheckoutModal(false)}>
        close
        </button>
    </ModalContainer>
)

export default CheckoutModal