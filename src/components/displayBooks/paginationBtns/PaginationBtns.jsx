import React from "react";
import { getBooksFromDB } from "../../../server/booksRequests";

const PaginationBtns = ({data}) => {
    const {setLoading, searchValue, setBooksToShow, numberOfBooks,numberOfPage,setNumberOfPage} = data

    const onPagination = async (direction) => {
        setLoading(true);
        try {
          const { books } = await getBooksFromDB(
            (numberOfPage - 1 + direction) * 6,
            searchValue
          );
          setNumberOfPage(numberOfPage + direction);
          console.log(numberOfPage)

          setBooksToShow(books);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className="buttons-container">
        {numberOfPage > 1 && (
          <button className="pagination-btn" onClick={() => onPagination(-1)}>previus</button>
        )}
        {numberOfPage * 6 < numberOfBooks && (
          <button className="pagination-btn" onClick={() => onPagination(1)}>next</button>
        )}
      </div>
    )
}

export default PaginationBtns