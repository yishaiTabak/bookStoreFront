import React from "react";
import ModalContainer from "../../../../../modalContainer/ModalContainer";

const WantToDelete = ({bookDetails, onDeleteBook, onDontDelete}) => (
    <ModalContainer>
          <div className="modal-text">
            are you sure you want to delete "{bookDetails.name}"?
          </div>
          <div className="confirm-delete-buttons">
            <button className="yes-btn" onClick={onDeleteBook}>
              Yes
            </button>
            <button className="no-btn" onClick={onDontDelete}>
              No
            </button>
          </div>
        </ModalContainer>
)

export default WantToDelete