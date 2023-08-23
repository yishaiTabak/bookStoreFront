import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import SuccessfullModal from "../succesfullModal/SuccessfullModal";
import WantToDelete from "./wantToDelete/WantToDelete";
import useDeleteBookBtn from "./useDeleteBookBtn";

const DeleteBookBtn = ({ bookDetails }) => {
  const {
    isWantToDelete, setIsWantToDelete, isBookDeleted, onDeleteBook, onCloseDeletedModal, onDontDelete
  } = useDeleteBookBtn(bookDetails)

  return (
    <div className="delete-container">
      <div className="delete-icon" onClick={() => setIsWantToDelete(true)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
      {isWantToDelete && 
        <WantToDelete bookDetails={bookDetails} onDeleteBook={onDeleteBook} onDontDelete={onDontDelete} /> }
      {isBookDeleted && 
        <SuccessfullModal onClose={onCloseDeletedModal} modalText={bookDetails.name + " deleted successfully"} /> }
    </div>
  );
};

export default DeleteBookBtn;
