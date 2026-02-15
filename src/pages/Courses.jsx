import React, { useState } from "react";
import styles from "../styles/Courses.module.css";
import Search from "../components/UI/Search/Search";
import Button from "../components/UI/Button/Button";

const Courses = ({ links }) => {
  const [course, setCourse] = useState();

  function nextSlide() {}

  function prevSlide() {}

  return (
    <main>
      <div className="container" style={{ flexDirection: "column" }}>
        <div style={{ marginTop: "60px" }}>
          <Search placeholder="Search for course" />
        </div>
      </div>

      <div className={`${styles.water} ${styles.layer_one}`}>
        <svg
          style={{ backgroundColor: "#88c0e0" }}
          width="100%"
          height="72"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="wavepath"
            d="M100,0  L100, 0C35,150 35,0 0,-1z"
            fill="#F0FAFF"
          ></path>
        </svg>
        <div className="container" style={{ flexDirection: "column" }}>
          <h2 className={styles.course_name}>Navigation</h2>
          <div className="container" style={{ position: "relative" }}>
            <div className={styles.arrows}>
              <Button
                className={`${styles.arrow} ${styles.arrow_left}`}
              ></Button>
              <Button
                className={`${styles.arrow} ${styles.arrow_right}`}
              ></Button>
            </div>
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
        </div>
      </div>

      <div className={`${styles.water} ${styles.layer_two}`}>
        <svg
          style={{ backgroundColor: "#77a3d4" }}
          width="100%"
          height="72"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="wavepath"
            d="M0,0  L100, 0C35,150 35,0 0,90z"
            fill="#88c0e0"
          ></path>
        </svg>
        <div className="container" style={{ flexDirection: "column" }}>
          <h2 className={styles.course_name}> Leadership & Management</h2>
          <div className="container" style={{ position: "relative" }}>
            <div className={styles.arrows}>
              <Button
                className={`${styles.arrow} ${styles.arrow_left}`}
              ></Button>
              <Button
                className={`${styles.arrow} ${styles.arrow_right}`}
              ></Button>
            </div>
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
        </div>
      </div>

      <div className={`${styles.water} ${styles.layer_three}`}>
        <svg
          style={{ backgroundColor: "#5276a0" }}
          width="100%"
          height="72"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="wavepath"
            d="M0,0  L100, 0C35,100 25,0 0,50z"
            fill="#77a3d4"
          ></path>
        </svg>
        <div className="container" style={{ flexDirection: "column" }}>
          <h2 className={styles.course_name} style={{ color: "#f0faff" }}>
            Emergency preparedness
          </h2>
          <div className="container" style={{ position: "relative" }}>
            <div className={styles.arrows}>
              <Button
                className={`${styles.arrow} ${styles.arrow_left}`}
              ></Button>
              <Button
                className={`${styles.arrow} ${styles.arrow_right}`}
              ></Button>
            </div>
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
        </div>
      </div>
    </main>
  );
};

export default Courses;
