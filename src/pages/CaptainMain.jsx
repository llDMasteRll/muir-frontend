import { useEffect, useState } from "react";
import styles from "../styles/CaptainMain.module.css"; // Assuming you have a CSS module for styles
import Search from "../components/UI/Search/Search";
import Table from "../components/UI/Table/Table";
import Button from "../components/UI/Button/Button";
import filter from "../components/UI/Filter/filter(1).png";
import FetchCrew from "../functions/fetch_crew";

const CaptainMain = () => {
  const links = [
    { path: "/", label: "Crew table" },
    { path: "/", label: "Statistic" },
  ];

  const [crew, setCrew] = useState([]);
  const [page, setPage] = useState(() => {
    const memoPage = localStorage.getItem("crewPage");
    return memoPage ? Number(memoPage) : 1;
  });

  async function loadCrewData() {
    const data = await FetchCrew(page);
    setCrew(data);
  }

  useEffect(() => {
    loadCrewData();

    localStorage.setItem("crewPage", page)
  }, [page]);

  return (
    <main>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.crew_list}>
            <div className={styles.menu}>
              <div className={styles.tabs}>
                <div className={`${styles.tab} ${styles.active}`}>
                  Crew list
                </div>
                <div className={styles.tab}>Statistic</div>
              </div>
              <div className={styles.buttons}>
                <div className={styles.search_container}>
                  <Search
                    name="search"
                    type="text"
                    placeholder="Who are you looking for?"
                    height="49px"
                    color="#182C3A"
                    buttonColor="transparent"
                    buttonBorders="1"
                  />
                </div>
                <Button
                  className={styles.filter}
                  color="#678CA6"
                  backgroundColor="transparent"
                  buttonBorders="1"
                >
                  <img className={styles.filter_img} src={filter} alt="" />
                  Filter
                </Button>
                <Button
                  className={styles.spaces}
                  color="#678CA6"
                  backgroundColor="transparent"
                  buttonBorders="1"
                >
                  Add
                </Button>
                <Button
                  className={styles.spaces}
                  color="#678CA6"
                  backgroundColor="transparent"
                  buttonBorders="1"
                >
                  Remove
                </Button>
              </div>
            </div>
            <Table data={crew} page={page} setPage={setPage}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaptainMain;
