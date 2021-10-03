import React from "react";

const Articles = (props) => {
  let articles = fetch("http://localhost:3001/articles")
    .then((response) => response.json())
    .then((articles) => alert(articles[0].title));
};

export default Articles;
