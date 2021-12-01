import { useMemo } from "react";

export const useSortedBooks = (books, sort) => {
  const sortedBooks = useMemo(() => {
    if (sort) {
      return [...books].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return books;
  }, [books, sort]);
  return sortedBooks;
};

export const useBooks = (books, sort, query) => {
  const sortedBooks = useSortedBooks(books, sort);
  const sortedAndSearchedBooks = useMemo(() => {
    return sortedBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  }, [query, sortedBooks]);
  return sortedAndSearchedBooks;
};
