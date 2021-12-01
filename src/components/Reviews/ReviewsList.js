import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "./Reviews.module.css";
import Select from "../UI/select/Select.js";
import BookService from "../../API/ReviewsService.js";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [isLoading, setLoading] = useState(false);

  const options = [
    { value: "title", name: "By title" },
    { value: "review", name: "By content" },
  ];

  const getReviews = async () => {
    const reviews = await BookService.getAll();
    setReviews(reviews);
  };

  useEffect(() => {
    setLoading(true);
    getReviews();
    setLoading(false);
  }, []);

  const sortReviews = (sort) => {
    setSelectedSort(sort);
    console.log(reviews);
    setReviews([...reviews].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className={styles.reviewsList}>
      <Select
        value={selectedSort}
        onChange={sortReviews}
        defaultValue="Select by"
        options={options}
      />
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {reviews.map((review) => {
            return (
              <div className={styles.reviewContainer}>
                <Link
                  className={styles.reviewLink}
                  key={review.id}
                  to={`/reviews/${review.id}`}
                >
                  <div className={styles.reviewText}>
                    <h4>{review.title}</h4>
                    <p>{review.review}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ReviewsList;
