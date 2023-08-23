import React from "react";
import ModalContainer from "../../../../modalContainer/ModalContainer";

const SuccessfullModal = ({onClose,modalText }) => (
    <ModalContainer>
        <div className="modal-text">{modalText}</div>
        <button
            onClick={() => onClose()}
            className="close"
        >
            close
        </button>
    </ModalContainer>
)

export default SuccessfullModal