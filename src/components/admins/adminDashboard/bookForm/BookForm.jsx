import React, { useContext, useState } from "react";
import { BooksContext } from "../../../../context/AdminBooksContext";
import { LoginContext } from "../../../../context/LoginContext";
import { insertBookInOrder } from "./bookFormFuncs";
import BookFormContent from "./bookFormContent/BookFormContent";

const BookForm = ({ data }) => {
  const { allBooks, setAllBooks } = useContext(BooksContext);
  const { loginState } = useContext(LoginContext);
  const {
    bookDetails,
    title,
    submitText,
    formRequest,
    showSuccessModal,
    closeForm,
  } = data;

  const [name, setName] = useState(bookDetails?.name || "");
  const [author, setAuthor] = useState(bookDetails?.author || "");
  const [price, setPrice] = useState(bookDetails?.price || "");
  const [discount, setDiscount] = useState(bookDetails?.discount || 0);
  const [img, setImg] = useState(bookDetails?.img || "");
  const [description, setDescription] = useState(bookDetails?.description || "");

  const onSendForm = async (event) => {
    event.preventDefault();
    if (!name || !author || !price || !img || !description) return;
    const res = await formRequest(
      { name, author, price, discount, img, description },
      loginState.token,
      bookDetails?._id
    );

    const newAllBooks = insertBookInOrder(allBooks, bookDetails, res)
    setAllBooks(newAllBooks);
    showSuccessModal();
  };

  const bookFormData = {
    bookDetails,
    title,
    submitText,
    closeForm,
    onSendForm,
    setName,
    setAuthor,
    setPrice,
    setDiscount,
    setImg,
    setDescription,
  }

  return <BookFormContent data={bookFormData} />
};

export default BookForm;
