import React from 'react';
import styles from "./CustomModal.module.css";

const CustomModal = ({children, visible, setVisible}) => {

    const rootStyle = [styles.modal];
    if(visible) {
        rootStyle.push(styles.active) 
    }

    return (
        <div className={rootStyle.join(" ")} onClick={() => setVisible(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default CustomModal;