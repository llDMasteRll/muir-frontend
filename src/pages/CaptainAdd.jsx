import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CaptainMain.module.css";
import Button from "../components/UI/Button/Button";
import DataInput from "../components/UI/DataInput/DataInput";
import CheckBox from "../components/UI/CheckBox/CheckBox";
import ModalWindow from "../components/UI/ModalWindow/ModalWindow";
import Search from "../components/UI/Search/Search";

const positions = [
  //need to be replaced by DB data
  "All",
  "Command Staff",
  "Engineering Staff",
  "Support Staff",
];

const CaptainAdd = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(positions);

  return (
    <main>
      <ModalWindow
        isOpen={isOpen}
        newStyles={styles.position_modal_height}
        onClose={() => setIsOpen(false)}
      >
        <div className={styles.position_header}>
          <h3 className={styles.modal_header}>Choose a position</h3>
          <div className={styles.position_header_right}>
            <Search placeholder="Find position..." />
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </div>
        <div className={styles.position_content}>
          <ul className={styles.position_groups}>
            {positions.map((position) => (
              <div
                key={position}
                className={`${styles.position_group} ${active === position ? styles.selected_position_group : ""}`}
                onClick={() => setActive(position)}
              >
                <span>{position}</span>
              </div>
            ))}
          </ul>
          <div className={styles.position_records}>
            <div
              className={styles.position_record}
              onClick={() => setIsOpen(false)}
            >
              <h4>Captain/Master</h4>
              <p>Can delegate all his responsibilities</p>
            </div>
          </div>
        </div>
      </ModalWindow>
      <div className={`container ${styles.content}`}>
        <Link to={links.captain}>
          <Button className={styles.back_arrow_space}>
            Back <div className={styles.back_arrow}></div>
          </Button>
        </Link>
        <div className="container">
          <div>
            <h3>Name</h3>
            <DataInput placeholder="Type here" />
          </div>
          <div>
            <h3>Last name</h3>
            <DataInput placeholder="Type here" />
          </div>
          <div>
            <h3>Date of birth</h3>
            <DataInput placeholder="Type here" />
          </div>
          <div>
            <h3>Sign on date</h3>
            <DataInput placeholder="Type here" />
          </div>
        </div>
        <div>
          <h3>Position</h3>
          <Button
            className={styles.spaces}
            color="#678CA6"
            backgroundColor="transparent"
            buttonBorders="1"
            onClick={() => setIsOpen(true)}
          >
            Position
          </Button>
        </div>
        <div>
          <CheckBox />
        </div>
      </div>
    </main>
  );
};

export default CaptainAdd;
