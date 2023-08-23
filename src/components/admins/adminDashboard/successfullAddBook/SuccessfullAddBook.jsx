import React from "react";
import ModalContainer from "../../../modalContainer/ModalContainer";

const SuccessfullAddBook = ({onClose}) => (
    <ModalContainer>
        <div>The book has been successfully added</div>
        <button onClick={onClose} className="close">
            close
        </button>
    </ModalContainer>
)

export default SuccessfullAddBook