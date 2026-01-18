import { useEffect, useState } from "react";
import styles from "../styles/CaptainMain.module.css"; // Assuming you have a CSS module for styles
import Search from "../components/UI/Search/Search";
import Table from "../components/UI/Table/Table";
import Button from "../components/UI/Button/Button";
import filter from "../components/UI/Filter/filter(1).png";
import fetchCrew from "../functions/fetchCrew";
import addCrew from "../functions/addCrew";
import deleteCrew from "../functions/deleteCrew";

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
  const [personData, setPersonData] = useState({
    position: "Third Engineer",
    first_name: "Daniel",
    last_name: "Lewis",
    date_of_birth: "1990-06-30",
    sign_on_date: "2022-09-05",
    sign_off_date: "2023-10-12",
    status: 1,
  });
  const [selectedIds, setSelectedIds] = useState([]);

  async function loadCrewData() {
    const data = await fetchCrew(page);
    setCrew(data);
  }
  useEffect(() => {
    loadCrewData();
    localStorage.setItem("crewPage", page);
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
                  onClick={() => addCrew(personData)}
                >
                  Add
                </Button>
                <Button
                  className={styles.spaces}
                  color="#678CA6"
                  backgroundColor="transparent"
                  buttonBorders="1"
                  onClick={() => selectedIds.forEach(id => deleteCrew(id))}
                >
                  Delete
                </Button>
              </div>
            </div>
            {crew.pages > 0 ? (
              <Table
                data={crew}
                page={page}
                setPage={setPage}
                onSelectionChange={setSelectedIds}
              />
            ) : (
              <h2 className={styles.without_data}>No crew records found</h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaptainMain;
