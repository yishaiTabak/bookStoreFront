import React from "react";
import ModalContainer from "../../modalContainer/ModalContainer";
import ViewBookForAdmins from "./viewBookForAdmins/ViewBookForAdmins";
import BookForm from "../adminDashboard/bookForm/BookForm";
import useAdminDashboard from "./useAdminDashboard";
import SuccessfullAddBook from "./successfullAddBook/SuccessfullAddBook";
import AddBookBtn from "./addBookBtn/AddBookBtn";

const AdminDashboard = () => {
  const {
    searchValue,
    isZeroBooks,
    isAddBookModalHidden,
    addBookSuccessHidden,
    onSearch,
    onCloseSuccessAddBook,
    bookFormData,
    allBooks,
    setIsAddBookModalHidden
    } = useAdminDashboard()

  return (
    <div className="dashboard-page">
      <div className="viewBooks">
        <input
          type="text"
          placeholder="search"
          className="search"
          onInput={onSearch}
        />
        {isZeroBooks ? (
          <div className="bad-search-message">
            there is no books that match to your search
          </div>
        ) : (
          <div className="books">
            {allBooks.map((bookDetails) => {
              if (bookDetails.name.includes(searchValue)) {
                return (
                  <ViewBookForAdmins key={bookDetails._id} bookDetails={bookDetails}/>
                );
              }
              return null
            })}
          </div>
        )}

        <AddBookBtn setModal={() =>setIsAddBookModalHidden(false)}/>
        {!isAddBookModalHidden && <ModalContainer> <BookForm data={bookFormData} /> </ModalContainer>}
        {!addBookSuccessHidden && <SuccessfullAddBook onClose={onCloseSuccessAddBook}/>}
      </div>
    </div>
  );
};

export default AdminDashboard;
