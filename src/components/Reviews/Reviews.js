import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import ReviewForm from "./ReviewForm.js";
import ReviewsList from "./ReviewsList.js";

const Reviews = (props) => {
  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.pageTitle}>Book reviews</h2>
      <div className={styles.content}>
        <ReviewsList />
        <div className={styles.newReview}>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
