import { useState, useEffect } from "react";
import styles from "./Table.module.css";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import { ReactComponent as Edit } from "./Edit.svg";

const Table = ({
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
      arr.some(p => p.id === newPerson.id) 
        ? arr.filter(p => p.id !== newPerson.id) 
        : [...arr, newPerson]
    );
  };

  const formatDate = (date) => new Date(date).toISOString().slice(0, 10);

  return (
    <div className={styles.Table}>
      <div className={styles.table_wrapper}>
        <table>
          <colgroup>
            <col style={{ width: "4%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "4%" }} />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>№</th>
              <th>Position</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Date of birth</th>
              <th>Sign on date</th>
              <th>Sign off date</th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                        {data.map((person, index) => (
              <tr key={person.id}>
                <td>
                  <CheckBox 
                    checked={selectedIds.some(p => p.id === person.id)} 
                    onChange={() => toggleSelectedPerson(person)} 
                  />
                </td>
                <td>{getIndex(index)}</td> {/* Порядковый номер */}
                <td>{person.position}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{formatDate(person.date_of_birth)}</td>
                <td>{formatDate(person.sign_on_date)}</td>
                <td>{formatDate(person.sign_off_date)}</td>
                <td style={{ textAlign: "center" }}>
                   <Button backgroundColor={person.status ? "#61B665" : "#B8081D"}>
                      {person.status ? "On board" : "Off board"}
                   </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button>View profile</Button>
                </td>
                <td style={{ textAlign: "right" }}>
                   {person.status && <Edit className={styles.edit} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <Button onClick={() => setPage(1)}>&laquo;</Button>
        <Button onClick={prevPage}>&lt;</Button>
        <input
          maxLength={3} 
          className={styles.curent_page} 
          value={inputPage} 
          onChange={(e) => setInputPage(e.target.value)} 
          onBlur={commitValue}
          onKeyDown={(e) => e.key === "Enter" && commitValue()}
        />
        <Button onClick={nextPage}>&gt;</Button>
        <Button onClick={() => setPage(totalPages)}>&raquo;</Button>
      </div>
    </div>
  );
};

export default Table;
