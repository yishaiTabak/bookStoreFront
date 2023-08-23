import { useContext, useState } from "react";
import { deleteBook } from "../../../../../server/booksRequests";
import { BooksContext } from "../../../../../context/AdminBooksContext";
import { LoginContext } from "../../../../../context/LoginContext";

const useDeleteBookBtn = (bookDetails) =>{
    const { loginState } = useContext(LoginContext);
  const { allBooks, setAllBooks } = useContext(BooksContext);

  const [isWantToDelete, setIsWantToDelete] = useState(false);
  const [isBookDeleted, setIsBookDeleted] = useState(false);

  const onDeleteBook = async () => {
    await deleteBook(loginState.token, bookDetails._id);
    setIsBookDeleted(true);
  };

  const onCloseDeletedModal = () => {
    let newAllBooks = [...allBooks];
    newAllBooks = newAllBooks.filter((book) => book._id !== bookDetails._id);
    setAllBooks(newAllBooks);
  };

  const onDontDelete = () => {
    setIsWantToDelete(false);
  };
  return {
    isWantToDelete, setIsWantToDelete, isBookDeleted, onDeleteBook, onCloseDeletedModal, onDontDelete
  }
}
export default useDeleteBookBtn