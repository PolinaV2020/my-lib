import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import BooksList from "./BooksList.js";
import BookFilter from "./BookFilter.js";
import { useBooks} from "../../hooks/useBook.js";
import searchIcon from "../../assets/icons/search-icon.png";
import styles from "./BooksList.module.css";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter ] = useState({sort: "", query: ""});

  const sortedAndSearchedBooks = useBooks(books, filter.sort, filter.query);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => setBooks(response.data));
  }, []);


  return (
    <div className={styles.wrapper}>
      <BookFilter filter={filter} setFilter={setFilter} styles={styles}/>
      <h1 className={styles.pageTitle}>
        There's no such thing as too many books
      </h1>
      <BooksList books={sortedAndSearchedBooks} />
    </div>
  );
};

export default Books;
