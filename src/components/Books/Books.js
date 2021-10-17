import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
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
  });

  return books.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      dateOfPublishing={book.published}
    />
  ));
};

export default Books;
