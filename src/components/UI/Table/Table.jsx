import styles from "./Table.module.css";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import { ReactComponent as Edit } from "./Edit.svg";

const Table = () => {
  const persons = [
    //person data
    {
      id: 143,
      position: "Master",
      first_name: "Jhon",
      last_name: "Doe",
      date_of_birth: "01.10.2002",
      sign_on_date: "23.10.2022",
      sign_off_date: "04.03.2024",
      status: 1,
      profile: "/captain_main",
    },
    {
      id: 143,
      position: "Master",
      first_name: "Jhon",
      last_name: "Doe",
      date_of_birth: "01.10.2002",
      sign_on_date: "23.10.2022",
      sign_off_date: "04.03.2024",
      status: 1,
      profile: "/captain_main",
    },
    {
      id: 143,
      position: "Master",
      first_name: "Jhon",
      last_name: "Doe",
      date_of_birth: "01.10.2002",
      sign_on_date: "23.10.2022",
      sign_off_date: "04.03.2024",
      status: 1,
      profile: "/captain_main",
    },
    {
      id: 143,
      position: "Master",
      first_name: "Jhon",
      last_name: "Doe",
      date_of_birth: "01.10.2002",
      sign_on_date: "23.10.2022",
      sign_off_date: "04.03.2024",
      status: 1,
      profile: "/captain_main",
    },
    {
      id: 144,
      position: "Master",
      first_name: "Jhon",
      last_name: "Doe",
      date_of_birth: "01.10.2002",
      sign_on_date: "23.10.2022",
      sign_off_date: "04.03.2024",
      status: 0,
      profile: "/captain_main",
    },
  ];

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
            {persons.map((person, index) => (
              <tr key={person.id}>
                <td>
                  <CheckBox />
                </td>
                <td>{index + 1}</td>
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
        <Button>&laquo;</Button>
        <Button>&lt;</Button>
        <input className={styles.curent_page} />
        <Button>&gt;</Button>
        <Button>&raquo;</Button>
      </div>
    </div>
  );
};

export default Table;
