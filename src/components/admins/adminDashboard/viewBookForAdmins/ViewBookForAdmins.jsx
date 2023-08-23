import React from "react";
import { editBook } from "../../../../server/booksRequests";
import ModalContainer from "../../../modalContainer/ModalContainer";
import BookForm from "../bookForm/BookForm";
import DeleteBookBtn from "./deleteBookBtn/DeleteBookBtn";
import useViewBookForAdmins from "./useViewBookForAdmins";
import SetDiscount from "./setDiscount/SetDiscount";
import DashboardBookDetails from "./dashboardBookDetails/DashboardBookDetails";
import SuccessfullModal from "./succesfullModal/SuccessfullModal";

const ViewBookForAdmins = ({ bookDetails }) => {
  const {
    isSuccessfullEditModal,
    isEditModalHidden,
    isDeleteModalHidden,
    onDiscount,
    onEdit,
    onCloseSuccessfullEditModal,
    setIsEditModalHidden,
    setIsDeleteModalHidden,
    setIsSuccessfullEditModal,
  } = useViewBookForAdmins(bookDetails);

  const data = {
    bookDetails,
    title: "edit book",
    submitText: "save changes",
    formRequest: editBook,
    showSuccessModal: () => setIsSuccessfullEditModal(true),
    closeForm: () => setIsEditModalHidden(true),
  };

  return (
    <div className="book-container">
      <DashboardBookDetails bookDetails={bookDetails} />
      <div className="buttons">
        <SetDiscount bookDetails={bookDetails} onDiscount={onDiscount} />
        <button className="edit-button" onClick={onEdit}>
          Edit
        </button>
        <div className="delete-btn-container">
          <DeleteBookBtn bookDetails={bookDetails} />
        </div>
        {!isEditModalHidden && (
          <ModalContainer>
            <BookForm data={data} />
          </ModalContainer>
        )}
        {!isDeleteModalHidden && 
          <SuccessfullModal onClose={()=>setIsDeleteModalHidden(true)} modalText={"The book was successfully deleted"} /> }
        {isSuccessfullEditModal && 
          <SuccessfullModal onClose={onCloseSuccessfullEditModal} modalText={"The book was successfully edited"} /> }
      </div>
    </div>
  );
};

export default ViewBookForAdmins;
