import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Typography, Rating } from "@mui/material";
import styles from "./Book.module.css";

const Book = () => {
  const [book, setBook] = useState({});

  console.log(book)

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
      <img className={styles.bookImage}src={book.image}></img>
      <h1>{book.title}</h1>
      <h3>{book.subtitle}</h3>
      <h2>{book.author}</h2>
      <div>
      <p>{book.publisher}</p>
      <time>{moment.utc(book.published).format('MM/DD/YYYY')}</time>
      </div>
      
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={bookLikesNumber}
        onChange={changeLikesNumber}
      />
      <p>{book.description}</p>
    </div>
  );
};

export default Book;
