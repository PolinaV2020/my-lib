import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = (props) => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  const getBook = async (id) => {
    const response = await axios.get(`http://localhost:3001/books/${id}`);
    setBook(response.data);
  };

  useEffect(() => {
    getBook(id);
  }, []);

  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <time>{props.published}</time>
    </div>
  );
};

export default Book;