import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Book from "./Book.js";

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
    <div>
      {books.map((book) => {
        return (
          <Link key={book.id} to={`/books/${book.id}`}>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <time>{book.published}</time>
          </Link>
        );
      })}
    </div>
  );
};

export default Books;
