import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Book from "./Book.js";
import styles from "./BooksList.module.css";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:3001/books")
      .then((response) => setBooks(response.data))
      .then(setLoading(false));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>There's no such thing as too many books</h1>
      <div className={styles.booksList}>
        {books.map((book) => {
          return (
            <div className={styles.bookContainer}>
              <Link className={styles.bookLink} key={book.id} to={`/books/${book.id}`}>
                <div className={styles.bookImageWrapper}>
                  <img className={styles.bookImage} src={book.image}></img>
                </div>
                <div className={styles.bookDescription}>
                <h1 className={styles.bookTitle}>{book.title}</h1>
                <h2 className={styles.bookAuthor}>{book.author}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
