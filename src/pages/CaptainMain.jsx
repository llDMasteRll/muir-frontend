import styles from "../styles/CaptainMain.module.css"; // Assuming you have a CSS module for styles
import Search from "../components/UI/Search/Search";
import Table from "../components/UI/Table/Table";
import Button from "../components/UI/Button/Button";

const CaptainMain = () => {
  const links = [
    { path: "/", label: "Crew table" },
    { path: "/", label: "Statistic" },
  ];

  return (
    <main>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.search_container}>
            <h2 style={{ textWrap: "nowrap", marginRight: "28px" }}>
              Who are you looking for?
            </h2>
            <Search
              name="search"
              type="text"
              placeholder="Search"
              height="49px"
              width="60%"
              color="#182C3A"
              buttonColor="transparent"
              buttonBorders="1"
            />
          </div>
          <div className={styles.crew_list}>
            <div className={styles.menu}>
              <div className={styles.tabs}>
                <div className={`${styles.tab} ${styles.active}`}>
                  Crew list
                </div>
                <div className={styles.tab}>
                  Statistic
                </div>
              </div>
              <div className={styles.buttons}>
                <Button
                  color="#678CA6"
                  backgroundColor="transparent"
                  buttonBorders="1"
                >
                  Add
                </Button>
                <Button
                  color="#678CA6"
                  backgroundColor="transparent"
                  buttonBorders="1"
                >
                  Remove
                </Button>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaptainMain;
