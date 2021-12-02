import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "./Reviews.module.css";
import Select from "../UI/select/Select.js";
import CustomPagination from "../UI/pagination/CustomPagination";
import BookService from "../../API/ReviewsService.js";
import { useFetching } from "../../hooks/useFetching.js";
import { getPagesCount, getPagesArray } from "../../utils/pages.js";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [reviewsTotalCount, setReviewsTotalCount] = useState(0);
  const [reviewsTotalPages, setReviewsTotalPages] = useState(0);
  const [pagesArray, setPagesArray] = useState([]);
  const [page, setPage ] = useState(1);

  const options = [
    { value: "title", name: "By title" },
    { value: "review", name: "By content" },
  ];

  const reviewsLimit = 5;

  const [fetchReviews, isReviewsLoading, reviewsError] = useFetching(async() => {
    const response = await BookService.getAll();
    setReviews(response.data);
  }) 

  useEffect(() => {
    fetchReviews();
    setReviewsTotalCount(reviews.length)
    setReviewsTotalPages(getPagesCount(reviewsTotalCount, reviewsLimit))
    setPagesArray(getPagesArray(reviewsTotalPages))
  }, [reviews.length, reviewsTotalCount, reviewsLimit, reviewsTotalPages]);

  console.log(pagesArray)

  

  const sortReviews = (sort) => {
    setSelectedSort(sort);
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

      { reviewsError && <h2>Error: ${reviewsError}. Reviews didn't load. </h2> }

      {isReviewsLoading ? (
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
      <CustomPagination pagesArray={pagesArray}/>
    </div>
  );
};

export default ReviewsList;
