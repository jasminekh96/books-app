import React from "react";

const BookResult = ({ booksArray = [], numberOfBooksToShow }) => (
  <div>
    {booksArray.length
      ? booksArray.map((book, index) => {
          if (!numberOfBooksToShow) {
            return (
              <div style={{ marginTop: "10px" }}>
                <img src={checkForISBN(book)} />
                <span style={{ display: "block" }}>Title: {book.title}</span>
                <br />
                <span data-testid={`author-name-${index}`}>
                  Author: {book.author}
                </span>
              </div>
            );
          } else if (index < numberOfBooksToShow);
          {
            return (
              <div style={{ marginTop: "10px" }}>
                <img src={checkForISBN(book)} />
                <span style={{ display: "block" }}>Title: {book.title}</span>
                <br />
                <span data-testid={`author-name-${index}`}>
                  Author: {book.author}
                </span>
              </div>
            );
          }
        })
      : "Search results not found"}
  </div>
);

export default BookResult;

// example of helper function and extract function ( we literally extracted the function )
function checkForISBN(book = {}) {
  if (book.primary_isbn13)
    return `https://covers.openlibrary.org/b/isbn/${book.primary_isbn13}-M.jpg`;
  else if (book.isbns && book.isbns[0] && book.isbns[0].isbn13)
    return `https://covers.openlibrary.org/b/isbn/${book.isbns[0].isbn13}-M.jpg`;
  return "https://static.vecteezy.com/system/resources/thumbnails/002/398/513/small/blank-book-cover-free-vector.jpg";
}
