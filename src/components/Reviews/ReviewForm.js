import React, { useState } from "react";
import CustomButton from "../UI/buttons/CustomButton.js";
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
      <CustomButton onClick={addNewReview}>Create a post</CustomButton>
    </form>
  );
};

export default ReviewForm;
