import { SecurityUpdateGood } from "@mui/icons-material";
import React from "react";
import CustomButton from "../buttons/CustomButton.js";
import styles from "./CustomPagination.module.css";

const CustomPagination = ({ pagesArray, setPage, page }) => {
  return (
    <div className={styles.pagination}>
      {pagesArray.map((page) => {
        return (
          <div className={styles.paginationButton} key={page}>
            <CustomButton onClick={() => setPage(page)}>{page}</CustomButton>
          </div>
        );
      })}
    </div>
  );
};

export default CustomPagination;
