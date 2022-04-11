import React, { useState } from "react";
import BookResult from "../src/BookResults";

const Search = () => {
  const [searchText, setSearchText] = useState();
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberOfBooks] = useState();
  const getBooks = async () => {
    if (searchText) {
      try {
        const booksResults = await fetchWrapper(
          `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${"Sc9cqi2eRRF0vU0VRGgeSjcwBIAAxnkG"}&author=${searchText}`
        );
        const booksArray =
          booksResults.results.length &&
          booksResults.results.map((book) => book);
        setBooks(booksArray);
      } catch (error) {
        console.log({ error });
        alert("No Search Results");
      }
    }
  };

  const ShowNumberOfBooks = (event) => {
    setNumberOfBooks(event.target.value);
  };

  return (
    <div>
      <input
        onChange={(event) => setSearchText(event.target.value)}
        type="text"
        placeholder="Search Books"
      />
      <button onClick={getBooks}>Search</button>
      <div>
        <select value={numberOfBooks} onChange={ShowNumberOfBooks}>
          <option>Number of Books to Show</option>
          {[1, 2, 3, 4, 5].map((number) => (
            <option value={number}>{number}</option>
          ))}
        </select>
      </div>
      <BookResult booksArray={books} numberOfBooksToShow={numberOfBooks} />
    </div>
  );
};

export default Search;

//another example of an extraction
//catching and rethrowing errors below:
async function fetchWrapper(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch, recieved a non-200 status code");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
