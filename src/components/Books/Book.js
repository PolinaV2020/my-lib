import React from "react";

const Book = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <time>{props.dateOfPublishing}</time>
    </div>
  );
};

export default Book;
