import axios from "axios";
import React, { useEffect, useState } from "react";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await axios.get("http://localhost:3001/reviews");
    setReviews(response.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  const createReview = async () => {
    const response = await axios.post("http://localhost:3001/reviews", {
      title: "gggg",
      review: "8888888",
      userId: 3
    });
    setReviews([...reviews, response.data]);
  };

  return (
    <div>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <h4>{review.title}</h4>
            <p>{review.review}</p>
          </div>
        );
      })}
      <div>
        <button onClick={createReview}>Create review</button>
      </div>
    </div>
  );
};

export default Reviews;
