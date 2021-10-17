import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const [review, setReview] = useState({});

  const { id } = useParams();

  const getReview = async (id) => {
    const response = await axios.get(`http://localhost:3001/reviews/${id}`);
    setReview(response.data);
  };

  useEffect(() => {
    getReview(id);
  }, []);

  return (
    <div>
      <h4>{review.title}</h4>
      <p>{review.review}</p>
    </div>
  );
};

export default Review;
