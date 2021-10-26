import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Book = () => {
  const [book, setBook] = useState({});

  const dispatch = useDispatch();

  const { id } = useParams();

  const bookLikesNumber = useSelector((state) => {
    return state.bookLikesNumber;
  });

  const actionLikesNumber = {
    type: "BUTTON_LIKE_CLICK"
  };

  const changeLikesNumber = () => {
    dispatch(actionLikesNumber);
  };

  const getBook = async (id) => {
    const response = await axios.get(`http://localhost:3001/books/${id}`);
    setBook(response.data);
  };

  useEffect(() => {
    getBook(id);
  }, []);

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <time>{book.dateOfPublishing}</time>
      <span>{bookLikesNumber}</span>
      <button onClick={changeLikesNumber}>Like</button>
    </div>
  );
};

export default Book;
