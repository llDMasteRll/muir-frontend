import { useState } from "react";
import styles from "./CourseCard.module.css";

const CourseCard = () => {
  return (
    <div className={styles.content_box}>
      <a className={styles.link_block} href="">
        <div className={styles.course_avatar}></div>
        <div className={styles.content_block}>
          <h3>Navigation</h3>
          <div className={styles.tags}>
            <span className={styles.tag}>#Position</span>
            <span className={styles.tag}>#Position</span>
            <span className={styles.tag}>#Position</span>
          </div>
          <div className={styles.info}>
            <span className={styles.time}>16h 43m</span>
            <span className={styles.topic}>8 topics</span>
            <span className={styles.exam}>1 exam</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
