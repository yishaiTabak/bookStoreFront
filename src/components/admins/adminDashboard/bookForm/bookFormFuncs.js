export const insertBookInOrder = (originalBooks, bookDetails,newBook ) =>{
    let newAllBooks = [...originalBooks];
    if (bookDetails)
      newAllBooks = newAllBooks.filter((book) => book._id !== bookDetails._id);
      
    const insertIndex = newAllBooks.findIndex(
      (book) => book["name"] > newBook["name"]
    );
    if (insertIndex === -1) newAllBooks.push(newBook);
    else newAllBooks.splice(insertIndex, 0, newBook);

    return newAllBooks
  }