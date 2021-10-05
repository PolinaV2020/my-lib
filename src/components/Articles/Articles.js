import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = (props) => {
  const [articles, setState] = useState([]);

  return (
    <div>
      {articles.map((article) => {
        return <h1 key={article.id}>{article.title}</h1>;
      })}
    </div>
  );
};

export default Articles;
