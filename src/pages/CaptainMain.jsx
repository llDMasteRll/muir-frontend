import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "../styles/CaptainMain.module.css"; // Assuming you have a CSS module for styles
import Search from "../components/UI/Search/Search";
import Table from "../components/UI/Table/Table";
import Button from "../components/UI/Button/Button";
import ModalWindow from "../components/UI/ModalWindow/ModalWindow";
import CrewDataInput from "../components/UI/CrewDataInput/CrewDataInput";
import Toast from "../components/UI/Toast/Toast";
import filter from "../components/UI/Filter/filter(1).png";
import fetchCrew from "../functions/fetchCrew";
import addCrew from "../functions/addCrew";
import deleteCrew from "../functions/deleteCrew";

const CaptainMain = () => {
  const links = [
    { path: "/", label: "Crew table" },
    { path: "/", label: "Statistic" },
  ];

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

  const [isOpen, setIsOpen] = useState(false);

  const [notification, setNotification] = useState(null);

  const queryClient = useQueryClient();

  const {
    data: crew,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["crew", page],
    queryFn: () => {
      localStorage.setItem("crewPage", page);
      return fetchCrew(page);
    },
    keepPreviousData: true,
  });

  const addCrewMutation = useMutation({
    mutationFn: addCrew,
    onSuccess: () => {
      queryClient.invalidateQueries(["crew"]);
    },
  });

  const deleteCrewMutation = useMutation({
    mutationFn: deleteCrew,
    onSuccess: () => {
      queryClient.invalidateQueries(["crew"]);
      setNotification({
        type: "success",
        message: "The deletion was successful ✅",
      });
      setTimeout(() => setNotification(null), 4000); // must match the animation time in the Toast.module.css
      setSelectedIds([]);
    },
    onError: () => {
      setNotification({ type: "error", message: "Error while deleting ❌" });
      setTimeout(() => setNotification(null), 4000);
    },
  });

  const confirmDeleting = () => {
    setIsOpen(false);
    return selectedIds.forEach((person) =>
      deleteCrewMutation.mutate(person.id),
    );
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading crew data</h2>;

  return (
    <main>
      <Toast notification={notification} />
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
                  onClick={() => addCrewMutation.mutate(personData)}
                >
                  Add
                </Button>
                <Button
                  className={styles.spaces}
                  color="#678CA6"
                  backgroundColor="transparent"
                  buttonBorders="1"
                  onClick={() => setIsOpen(true)}
                >
                  Delete
                </Button>

                <ModalWindow
                  onConfirm={confirmDeleting}
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                >
                  <h2 className={styles.modal_header}>Confirm deletion of the listed entries</h2>
                  <div className={styles.scroll_list}>
                    {selectedIds.map((selected) => {
                      const person = crew?.data?.find(
                        (p) => p.id === selected.id,
                      );
                      return (
                        <li key={selected.id}>
                          {" "}
                          {selected.position} {selected.first_name}{" "}
                          {selected.last_name} {selected.date_of_birth}{" "}
                        </li>
                      );
                    })}
                  </div>
                </ModalWindow>
              </div>
            </div>
            {crew.pages > 0 ? (
              <Table
                data={crew}
                page={page}
                setPage={setPage}
                selectedIds={selectedIds} // передаём массив
                setSelectedIds={setSelectedIds} // передаём функцию
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
