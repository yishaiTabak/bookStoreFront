import { useContext, useState } from "react";
import { BooksContext } from "../../../context/AdminBooksContext";
import { newBook } from "../../../server/booksRequests";

const useAdminDashboard = () =>{
    const { allBooks } = useContext(BooksContext);

  const [searchValue, setSearchValue] = useState("");
  const [isZeroBooks, setIsZeroBooks] = useState(false);
  const [isAddBookModalHidden, setIsAddBookModalHidden] = useState(true);
  const [addBookSuccessHidden, setAddBookSuccessHidden] = useState(true);

  const onSearch = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchValue(value);
    for (let book of allBooks) {
      if (book.name.includes(value)) {
        setIsZeroBooks(false);
        return;
      }
    }
    setIsZeroBooks(true);
  };

  const onCloseSuccessAddBook = () => {
    setAddBookSuccessHidden(true);
    setIsAddBookModalHidden(true);
  };

  const bookFormData = {
    bookDetails: null,
    title: "new book",
    submitText: "add book",
    formRequest: newBook,
    showSuccessModal: () => setAddBookSuccessHidden(false),
    closeForm: () => setIsAddBookModalHidden(true),
  };

  return {
    searchValue,
    isZeroBooks,
    isAddBookModalHidden,
    addBookSuccessHidden,
    onSearch,
    onCloseSuccessAddBook,
    bookFormData,
    allBooks,
    setIsAddBookModalHidden
  };
}

export default useAdminDashboard