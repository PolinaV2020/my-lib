import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Reviews.module.css";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await axios.get("http://localhost:3001/reviews");
    setReviews(response.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.pageTitle}>Book reviews</h2>
      <div className={styles.content}>
        <div className={styles.reviewsList}>
          {reviews.map((review) => {
            return (
              <div className={styles.reviewContainer}>
                <Link className={styles.reviewLink} key={review.id} to={`/reviews/${review.id}`}>
                <div className={styles.reviewText}>
                  <h4>{review.title}</h4>
                  <p>{review.review}</p>
                </div>
              </Link>
              </div>
              
            );
          })}
        </div>
          <div className={styles.newReview}>
            <form className={styles.form}>
              <input className={styles.titleInput} type="text" placeholder="Post title"></input>
              <input className={styles.textInput} type="text" placeholder="Post"></input>
              <button className={styles.button}>Create a post</button>
            </form>
          </div>
        
      </div>
    </div>
  );
};

export default Reviews;
