import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      {reviews.map((review) => {
        return (
          <Link key={review.id} to={`/reviews/${review.id}`}>
            <div>
              <h4>{review.title}</h4>
              <p>{review.review}</p>
            </div>
          </Link>
        );
      })}
      <div>
        <form>
          <input type="text" placeholder="Post title"></input>
          <input type="text" placeholder="Post"></input>
          <button>Create a post</button>
        </form>
        
      </div>
    </div>
  );
};

export default Reviews;
