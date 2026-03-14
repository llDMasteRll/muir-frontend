import { useState, useEffect } from "react";
import styles from "./Table.module.css";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import { ReactComponent as Edit } from "./Edit.svg";

const Table = ({
  filteredCrew,
  data,
  totalPages,
  page,
  setPage,
  selectedIds,
  setSelectedIds,
}) => {
  const [inputPage, setInputPage] = useState(page);

  useEffect(() => {
    setInputPage(page);
  }, [page]);

  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const getIndex = (index) => (page - 1) * 10 + (index + 1);

  const commitValue = () => {
    const currPage = Number(inputPage);
    if (!Number.isNaN(currPage) && currPage > 0 && currPage <= totalPages) {
      setPage(currPage);
    } else {
      setInputPage(page);
    }
  };

  const toggleSelectedPerson = (newPerson) => {
    setSelectedIds((arr) =>
      arr.some((p) => p.id === newPerson.id)
        ? arr.filter((p) => p.id !== newPerson.id)
        : [...arr, newPerson],
    );
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return isNaN(d) ? "" : d.toISOString().slice(0, 10);
  };

  return (
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
                      className={
                        !person.sign_off_date
                          ? styles.on_board
                          : styles.off_board
                      }
                    >
                      {!person.sign_off_date ? "On board" : "Off board"}
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
                  <h2 className={styles.without_data}>No crew records found</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <Button borderedButton="true" onClick={() => setPage(1)}>&laquo;</Button>
        <Button borderedButton="true" onClick={prevPage}>&lt;</Button>
        <input
          maxLength={3}
          className={styles.curent_page}
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          onBlur={commitValue}
          onKeyDown={(e) => e.key === "Enter" && commitValue()}
        />
        <Button borderedButton="true" onClick={nextPage}>&gt;</Button>
        <Button borderedButton="true" onClick={() => setPage(totalPages)}>&raquo;</Button>
      </div>
    </div>
  );
};

export default Table;
