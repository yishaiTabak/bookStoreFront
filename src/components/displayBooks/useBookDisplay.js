import { useEffect, useState } from "react";
import { getBooksFromDB } from "../../server/booksRequests";

const useBookDisplay =(searchValue) => {
  const [loading, setLoading] = useState(true);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [booksToShow, setBooksToShow] = useState([]);
  const [numberOfBooks, setNumberOfBooks] = useState(1);

  useEffect(
    () => async () => {
      try {
        const { books, numberOfBooks } = await getBooksFromDB(0, searchValue);

        setNumberOfBooks(numberOfBooks);
        setBooksToShow(books);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [searchValue]
  );

  const paginationData = {setLoading, searchValue, setBooksToShow, numberOfBooks,numberOfPage,setNumberOfPage}

  return { loading, numberOfBooks, booksToShow, paginationData };
}

export default useBookDisplay