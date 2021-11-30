import React, { useState } from "react";
import Button from "../UI/buttons/Button.js";
import Input from "../UI/inputs/Input.js";
import styles from "./Reviews.module.css";

const ReviewForm = ({create}) => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewText, setReviewText] = useState("");

  const addNewReview = (e) => {
    e.preventDefault();
    const newReview = {
        reviewTitle, reviewText
    }
    create(newReview)
    setReviewTitle("");
    setReviewText("");
  };

  return (
    <form className={styles.form}>
      <Input
        value={reviewTitle}
        onChange={(e) => setReviewTitle(e.target.value)}
        type="text"
        placeholder="Post title"
      ></Input>
      <Input
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        type="text"
        placeholder="Post"
      ></Input>
      <Button onClick={addNewReview}>Create a post</Button>
    </form>
  );
};

export default ReviewForm;
