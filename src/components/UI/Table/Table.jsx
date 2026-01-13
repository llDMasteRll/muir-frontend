import { useState, useEffect } from "react";
import styles from "./Table.module.css";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import { ReactComponent as Edit } from "./Edit.svg";

const Table = ({ data, page, setPage }) => {
  const [inputPage, setInputPage] = useState(page);

  useEffect(() => {
    setInputPage(page);
  }, [page]);

  if (!Array.isArray(data.data)) {
    console.log("data is not an array:", data.data);
    return <div>Loading...</div>;
  }

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const nextPage = () => {
    if (page < data.pages) setPage(page + 1); // don't forget to add a check in future
  };

  const item = (index) => {
    return page > 1 ? String((page - 1) * 10 + (index + 1)): String(index + 1);
  }

  const commitValue = () => {
    const currPage = Number(inputPage);
    if (!Number.isNaN(currPage) && currPage > 0) {
      setPage(currPage);
    } else {
      setInputPage(String(page));
    }
  };

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
            {data.data.map((person, index) => (
              <tr key={person.id}>
                <td>
                  <CheckBox />
                </td>
                <td>{item(index)}</td>
                <td>{person.position}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.date_of_birth}</td>
                <td>{person.sign_on_date}</td>
                <td>{person.sign_off_date}</td>
                <td style={{ textAlign: "center" }}>
                  {person.status ? (
                    <Button backgroundColor="#61B665" hoverColor="#6CCD71">
                      On board
                    </Button>
                  ) : (
                    <Button backgroundColor="#B8081D" hoverColor="#D10E26">
                      Off board
                    </Button>
                  )}
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button>View profile</Button>
                </td>
                {person.status ? (
                  <td style={{ textAlign: "right" }}>
                    <Edit className={styles.edit} />
                  </td>
                ) : (
                  <td></td>
                )}
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
          onChange={(e) => {
            if (e.target.value > data.pages) setInputPage(data.pages);
            else setInputPage(e.target.value);
          }}
          onBlur={commitValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              commitValue();
            }
          }}
        />
        <Button onClick={nextPage}>&gt;</Button>
        <Button onClick={() => setPage(data.pages)}>&raquo;</Button>
      </div>
    </div>
  );
};

export default Table;
