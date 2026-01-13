import React from 'react';
import styles from "./Filter.module.css"
import filter_img from "./filter(1).png"

const Filter = () => {
    return (
        <div className={styles.filter}>
            <img className={styles.filter_img} src={filter_img} alt="" />
        </div>
    );
}

export default Filter;
