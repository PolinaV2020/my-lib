import React from 'react';
import { Link } from "react-router-dom";
import styles from "./BooksList.module.css";

const BooksList = ({books}) => {

  if(!books.length) {
    return( <h3>There are no results for your search!</h3>)
  }

    return (
        <div className={styles.booksList}>
        {books.map((book) => {
          return (
            <div className={styles.bookContainer}>
              <Link
                className={styles.bookLink}
                key={book.id}
                to={`/books/${book.id}`}
              >
                <div className={styles.bookImageWrapper}>
                  <img
                    className={styles.bookImage}
                    src={book.image}
                    alt="Book cover"
                  ></img>
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
    );
};

export default BooksList;