import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Genres = () => {
  const dispatch = useDispatch();

  const number = useSelector((state) => {
    return state.number;
  });

  const addToCollectionAction = {
    type: "BUTTON_ADD_TO_COLLECTION_PRESSED"
  };

  const addToCollection = () => {
    dispatch(addToCollectionAction);
  };

  return (
    <div>
      <h1>There will be users Genres</h1>
      <button
        onClick={() => {
          addToCollection;
        }}
      >
        Добавить в коллекцию
      </button>
    </div>
  );
};

export default Genres;
