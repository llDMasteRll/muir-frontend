import styles from "../styles/ProfileMain.module.css";

const ProfileMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.avatar}></div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.textBlock}>
              <p>Name</p>
              <p>Yuriy</p>
            </div>

            <div className={styles.textBlock}>
              <p>Surname</p>
              <p>Bobrov</p>
            </div>

            <div className={styles.textBlock}>
              <p>Sign in date</p>
              <p>25.10.2025</p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.textBlock}>
              <p>Rank</p>
              <p>Master</p>
            </div>

            <div className={styles.textBlock}>
              <p>Date of Birth</p>
              <p>01.01.1970</p>
            </div>

            <div className={styles.textBlock}>
              <p>Sign off date</p>
              <p>24.02.2026</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.h2}> Recently viewed courses </h2>

    <div className={styles.courses_block}>
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

      </div>
    </div>
  );
};

export default ProfileMain;
