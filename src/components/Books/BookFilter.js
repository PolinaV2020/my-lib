import React from "react";
import Input from "../UI/inputs/Input.js";
import Select from "../UI/select/Select.js";

const BookFilter = ({ filter, setFilter, styles }) => {
  const options = [
    { value: "title", name: "By title" },
    { value: "author", name: "By author" },
  ];

  return (
    <div className={styles.search}>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Books search..."
      ></Input>
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by..."
        options={options}
      />
    </div>
  );
};

export default BookFilter;
