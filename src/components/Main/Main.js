import React from "react";
import background from "../../assets/images/main-background.webp";
import styles from "./Main.module.css";


const Main = () => {
  return (
      <div className={styles.wrapper}>
          <img className={styles.backgroundImage} src={background} alt="Background"></img>
      </div>
      
  )
};

export default Main;
