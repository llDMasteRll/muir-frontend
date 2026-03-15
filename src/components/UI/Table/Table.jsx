import { useState, useEffect } from "react";
import styles from "./Table.module.css";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import DataInput from "../DataInput/DataInput";
import ModalWindow from "../ModalWindow/ModalWindow";
import formatDate from "../../../functions/formatDate";
import { ReactComponent as Edit } from "./Edit.svg";

const Table = ({
  filteredCrew,
  data,
  totalPages,
  page,
  setPage,
  selectedIds,
  setSelectedIds,
  changeStatusMutation,
}) => {
  // ==================== STATE ====================

  // State for pagination input (when user types page manually)
  const [inputPage, setInputPage] = useState(page);

  // Controls modal window visibility
  const [isOpen, setIsOpen] = useState(false);

  // Flag to determine sign-on / sign-off mode
  const [offOn, setOffOn] = useState(0);

  // Stores the currently selected worker (row clicked in table)
  const [currentWorker, setCurrentWorker] = useState(null);

  // Stores selected date from the modal input
  const [date, setDate] = useState("");

  // ==================== EFFECTS ====================

  // Sync inputPage state with current page when pagination changes
  useEffect(() => {
    setInputPage(page);
  }, [page]);

  // ==================== VALIDATION ====================

  // Safety check to avoid rendering table before data is ready
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  // ==================== MUTATION HANDLERS ====================

  // Handles crew status change (sign-on / sign-off)
  const handleChangeStatus = () => {
    if (!changeStatusMutation || !currentWorker) return;

    if (!date) {
      alert("Please enter a date");
      return;
    }

    changeStatusMutation.mutate({
      worker_id: currentWorker.id,
      status: currentWorker.sign_off_date ? "on" : "off",
      date: date,
    });
    
    setDate("");
    setIsOpen(false);
  };

  // ==================== PAGINATION ====================

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const getIndex = (index) => (page - 1) * 10 + (index + 1);

  // Validates manual page input and updates pagination
  const commitValue = () => {
    const currPage = Number(inputPage);
    if (!Number.isNaN(currPage) && currPage > 0 && currPage <= totalPages) {
      setPage(currPage);
    } else {
      setInputPage(page);
    }
  };

  // ==================== SELECTION ====================

  // Adds/removes crew member from selection list (checkbox logic)
  const toggleSelectedPerson = (newPerson) => {
    setSelectedIds((arr) =>
      arr.some((p) => p.id === newPerson.id)
        ? arr.filter((p) => p.id !== newPerson.id)
        : [...arr, newPerson],
    );
  };

  // ==================== RENDER ====================

  return (
    <>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        newStyles={styles.modal_padding}
      >
        <h2 className={styles.modal_header}>
          Please enter the {offOn ? "sign-on" : "sign-off"} date
        </h2>

        <DataInput
          type="date"
          className={styles.date_input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="container" style={{ width: "100%" }}>
          <Button
            onClick={handleChangeStatus}
            disabled={!date || changeStatusMutation?.isPending}
          >
            {currentWorker?.sign_off_date ? "On board" : "Off board"}
          </Button>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </div>
      </ModalWindow>
      
      <div className={styles.Table}>
        <div className={styles.table_wrapper}>
          <table>
            <colgroup>
              <col style={{ width: "5%" }} />
              <col style={{ width: "5%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "12%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "5%" }} />
            </colgroup>

            <thead>
              <tr>
                <th></th>
                <th>№</th>
                <th>Full name</th>
                <th>Position</th>
                <th>Date of birth</th>
                <th>Sign on date</th>
                <th>Sign off date</th>
                <th style={{ textAlign: "center" }}>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredCrew.length > 0 ? (
                data.map((person, index) => (
                  <tr key={person.id}>
                    <td>
                      <CheckBox
                        checked={selectedIds.some((p) => p.id === person.id)}
                        onChange={() => toggleSelectedPerson(person)}
                      />
                    </td>
                    <td>{getIndex(index)}</td>
                    <td>{person.full_name}</td>
                    <td>{person.position_name}</td>
                    <td>{formatDate(person.date_of_birth)}</td>
                    <td>{formatDate(person.sign_on_date)}</td>
                    <td>
                      {person.sign_off_date
                        ? formatDate(person.sign_off_date)
                        : ""}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Button
                        onClick={() => {
                          setCurrentWorker(person);
                          setOffOn(person.sign_off_date ? 1 : 0);
                          setIsOpen(true);
                        }}
                        className={
                          !person.sign_off_date
                            ? styles.on_board
                            : styles.off_board
                        }
                      >
                        {person.sign_off_date ? "Off board" : "On board"}
                      </Button>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Edit className={styles.edit} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} style={{ textAlign: "center" }}>
                    <h2 className={styles.without_data}>
                      No crew records found
                    </h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.pagination}>
          <Button borderedButton="true" onClick={() => setPage(1)}>
            &laquo;
          </Button>
          <Button borderedButton="true" onClick={prevPage}>
            &lt;
          </Button>
          <input
            maxLength={3}
            className={styles.curent_page}
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            onBlur={commitValue}
            onKeyDown={(e) => e.key === "Enter" && commitValue()}
          />
          <Button borderedButton="true" onClick={nextPage}>
            &gt;
          </Button>
          <Button borderedButton="true" onClick={() => setPage(totalPages)}>
            &raquo;
          </Button>
        </div>
      </div>
    </>
  );
};

export default Table;
