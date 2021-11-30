import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../UI/inputs/Input.js";
import Select from "../UI/select/Select.js";
import styles from "./BooksList.module.css";
import searchIcon from "../../assets/icons/search-icon.png";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery ] = useState("");

  const options = [
    { value: "genre", name: "By genre" },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => setBooks(response.data))
  }, []);


  const sortBooks = (sort) => {
    setSelectedSort(sort);
    setBooks([...books].sort((a, b) => a[sort].localeCompare(b[sort])))
}

  return (
    <div className={styles.wrapper}>
       <div className={styles.search}>
        <Input 
        value={searchQuery} 
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Books search..."></Input>
        <Select defaultValue="Sort by..." options={options}/>
      </div>
      <h1 className={styles.pageTitle}>There's no such thing as too many books</h1>
  
      <div className={styles.booksList}>
        {books.map((book) => {
          return (
            <div className={styles.bookContainer}>
              <Link className={styles.bookLink} key={book.id} to={`/books/${book.id}`}>
                <div className={styles.bookImageWrapper}>
                  <img className={styles.bookImage} src={book.image}></img>
                </div>
                <div className={styles.bookDescription}>
                <h1 className={styles.bookTitle}>{book.title}</h1>
                <h2 className={styles.bookAuthor}>{book.author}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
