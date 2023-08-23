import React from "react";
import BookItem from "./bookItem/BookItem";
import Loader from "../Loader/Loader";
import PaginationBtns from "./paginationBtns/PaginationBtns";
import useBookDisplay from "./useBookDisplay";

const DisplayBooks = (props) => {
  const searchValue = props.searchValue || ""
  const { loading, numberOfBooks, booksToShow, paginationData } = useBookDisplay(searchValue)
  
  return loading ? (
    <Loader />
  ) : (
    <div className="home-container">
      <h1 className="header">
        {numberOfBooks > 0
          ? props.header
          : "there is no results match for '" + searchValue + "'"}
      </h1>
      {numberOfBooks > 0 && (
        <div className="books-container">
          {booksToShow.length > 0 &&
            booksToShow.map((bookDetails) => (
              <BookItem key={bookDetails._id} bookDetails={bookDetails} />
            ))}
        </div>
      )}
      <PaginationBtns data={paginationData} />
    </div>
  );
};

export default DisplayBooks;
