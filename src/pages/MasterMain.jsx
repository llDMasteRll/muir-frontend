import { useEffect, useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "../styles/MasterMain.module.css"; // Assuming you have a CSS module for styles
import Table from "../components/UI/Table/Table";
import Toast from "../components/UI/Toast/Toast";
import MasterMenu from "../components/UI/MasterMenu/MasterMenu";

import fetchCrew from "../API/get/fetchCrew";
import addCrew from "../API/post/addCrew";
import deleteCrew from "../API/delete/deleteCrew";
import changeBoardStatus from "../API/patch/changeBoardStatus";

const MasterMain = ({ links }) => {
  // ==================== CONSTANTS ====================

  const itemsPerPage = 10;

  // ==================== STATE ====================

  // Current page state, initialized from localStorage if available
  const [page, setPage] = useState(() => {
    try {
      const memoPage = localStorage.getItem("crewPage");
      return memoPage ? Number(memoPage) : 1;
    } catch (e) {
      return 1;
    }
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Array of selected crew members
  const [selectedIds, setSelectedIds] = useState([]);

  // Controls whether the modal window is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Notification state for success/error messages (used by Toast component)
  const [notification, setNotification] = useState(null);

  // ==================== REACT QUERY ====================

  // React Query client instance for cache management
  const queryClient = useQueryClient();

  // Fetch crew data for the current page using React Query
  const {
    data: crew = [
      {
        id: 1,
        full_name: "Jhon Doe",
        position_name: "Master",
        date_of_birth: "2026-01-12T00:00:00.000Z",
        sign_on_date: "2026-02-12T00:00:00.000Z",
        sign_off_date: null,
        status: 1,
      },
      {
        id: 2,
        full_name: "Jhon G",
        position_name: "Master",
        date_of_birth: "2026-02-12T00:00:00.000Z",
        sign_on_date: "2026-02-12T00:00:00.000Z",
        sign_off_date: null,
        status: 1,
      },
      {
        id: 3,
        full_name: "Jhon SDG",
        position_name: "Master",
        date_of_birth: "2026-02-12T00:00:00.000Z",
        sign_on_date: "2026-02-12T00:00:00.000Z",
        sign_off_date: null,
        status: 1,
      },
      {
        id: 4,
        full_name: "DF H",
        position_name: "Master",
        date_of_birth: "2026-02-12T00:00:00.000Z",
        sign_on_date: "2026-02-12T00:00:00.000Z",
        sign_off_date: null,
        status: 1,
      },
      {
        id: 5,
        full_name: "SG G",
        position_name: "Master",
        date_of_birth: "2026-02-12T00:00:00.000Z",
        sign_on_date: "2026-02-12T00:00:00.000Z",
        sign_off_date: "2026-02-12T00:00:00.000Z",
        status: 1,
      },
    ],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["crew"],
    queryFn: fetchCrew,
    keepPreviousData: true,
  });

  // ==================== DATA PROCESSING ====================

  // Filter crew list based on search input
  const filteredCrew = useMemo(() => {
    if (!Array.isArray(crew)) return [];

    const query = searchQuery?.toLowerCase().trim() || "";
    if (!query) return crew;

    return crew.filter(
      (person) =>
        person.full_name?.toLowerCase().includes(query) ||
        person.position_name?.toLowerCase().includes(query) ||
        person.date_of_birth?.includes(query),
    );
  }, [crew, searchQuery]);

  // Crew data for the current page
  const visibleCrew = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredCrew.slice(start, start + itemsPerPage);
  }, [filteredCrew, page]);

  const totalPages = Math.ceil(filteredCrew.length / itemsPerPage) || 1;

  // ==================== HANDLERS ====================

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setPage(1); // Return to the first page when searching
  };

  const confirmDeleting = () => {
    setIsOpen(false);
    return selectedIds.forEach((person) =>
      deleteCrewMutation.mutate(person.id),
    );
  };

  // ==================== MUTATIONS ====================

  // const addCrewMutation = useMutation({
  //   mutationFn: addCrew,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["crew"]);
  //   },
  // });

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

  const changeStatusMutation = useMutation({
    mutationFn: ({ worker_id, status }) => changeBoardStatus(worker_id, status),

    onSuccess: () => {
      queryClient.invalidateQueries(["crew"]);
    },

    onError: () => {
      setNotification({
        type: "error",
        message: "Error while updating status ❌",
      });

      setTimeout(() => setNotification(null), 4000);
    },
  });

  // ==================== EFFECTS ====================

  useEffect(() => {
    localStorage.setItem("crewPage", page);
  }, [page]);

  // ==================== LOADING STATE ====================

  if (isLoading)
    return (
      <main>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.crew_list}>
              <MasterMenu
                links={links}
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedIds={selectedIds}
                confirmDeleting={confirmDeleting}
              />
              <div className={styles.nodata}>
                <h2>Loading...</h2>
              </div>
{/* 
              <Table
                filteredCrew={filteredCrew}
                data={visibleCrew}
                totalPages={totalPages}
                page={page}
                setPage={setPage}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                changeStatusMutation={changeStatusMutation}
              /> */}
            </div>
          </div>
        </div>
      </main>
    );

  // ==================== ERROR STATE ====================

  if (isError)
    return (
      <main>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.crew_list}>
              <MasterMenu
                links={links}
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedIds={selectedIds}
                confirmDeleting={confirmDeleting}
              />
              <div className={styles.nodata}>
                <h2>Can't load crew data</h2>
              </div>
              {/* <Table
                filteredCrew={filteredCrew}
                data={visibleCrew}
                totalPages={totalPages}
                page={page}
                setPage={setPage}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                changeStatusMutation={changeStatusMutation}
              /> */}
            </div>
          </div>
        </div>
      </main>
    );

  // ==================== RENDER ====================

  return (
    <main>
      <Toast notification={notification} />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.crew_list}>
            <MasterMenu
              links={links}
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedIds={selectedIds}
              confirmDeleting={confirmDeleting}
            />
            <Table
              filteredCrew={filteredCrew}
              data={visibleCrew}
              totalPages={totalPages}
              page={page}
              setPage={setPage}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              changeStatusMutation={changeStatusMutation}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MasterMain;
