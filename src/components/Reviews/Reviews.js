import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import ReviewForm from "./ReviewForm.js";
import ReviewsList from "./ReviewsList.js";
import CustomModal from "../UI/modal/CustomModal.js";
import CustomButton from "../UI/buttons/CustomButton.js";

const Reviews = (props) => {
  const [modal, setModal ] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.pageTitle}>Book reviews</h2>
      <div className={styles.content}>
        <ReviewsList />
        <div className={styles.newReview}>
          <CustomButton onClick={()=> setModal(true)}>Create my own review</CustomButton>
          <CustomModal visible={modal} setVisible={setModal}><ReviewForm/></CustomModal>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
