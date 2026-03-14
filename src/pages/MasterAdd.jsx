import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MasterMain.module.css";
import Button from "../components/UI/Button/Button";
import DataInput from "../components/UI/DataInput/DataInput";
import ModalWindow from "../components/UI/ModalWindow/ModalWindow";
import Search from "../components/UI/Search/Search";
import addCrew from "../functions/addCrew";
import fetchPositions from "../functions/fetchPositions";
import fetchPositionGroups from "../functions/fetchPositionGroups";

const MasterAdd = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [positionGroups, setPositionGroups] = useState([]);
  const [positions, setPositions] = useState([{ id: "1", position: "Master" }]);
  const [active, setActive] = useState(true);
  const [records, setRecords] = useState([
    {
      id: Date.now(),
      first_name: "",
      last_name: "",
      date_of_birth: "",
      sign_on_date: "",
      position_id: "",
      position: "",
    },
  ]);
  const [buttonPositions, setButtonPositions] = useState([]);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const [errors, setErrors] = useState({});

  const addRecord = () => {
    setRecords([
      ...records,
      {
        id: Date.now(),
        first_name: "",
        last_name: "",
        date_of_birth: "",
        sign_on_date: "",
        position_id: "",
      },
    ]);
  };
  const removeRecord = (id) => {
    if (records.length === 1) return;
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleChange = (id, field, value) => {
    setRecords(
      records.map((record) =>
        record.id === id ? { ...record, [field]: value } : record,
      ),
    );
  };

  const handleSubmit = async () => {
    const newErrors = {};
    let hasError = false;

    records.forEach((record) => {
      const recordErrors = {};

      if (!record.first_name.trim()) {
        recordErrors.first_name = true;
        hasError = true;
      }
      if (!record.position_id) {
        recordErrors.position_id = true;
        hasError = true;
      }
      if (!record.date_of_birth) {
        recordErrors.date_of_birth = true;
        hasError = true;
      }
      if (!record.sign_on_date) {
        recordErrors.sign_on_date = true;
        hasError = true;
      }

      if (Object.keys(recordErrors).length > 0) {
        newErrors[record.id] = recordErrors;
      }
    });

    setErrors(newErrors);

    if (hasError) return; 

    for (const record of records) {
      await addCrew(record);
    }
  };

const choosePosition = (position_id, position) => {
  setRecords(
    records.map((record) =>
      record.id === selectedRecordId
        ? { ...record, position_id, position }
        : record,
    ),
  );

  setErrors((prevErrors) => {
    const newErrors = { ...prevErrors };
    if (newErrors[selectedRecordId]) {
      delete newErrors[selectedRecordId].position_id;
      if (Object.keys(newErrors[selectedRecordId]).length === 0) {
        delete newErrors[selectedRecordId];
      }
    }
    return newErrors;
  });

  setIsOpen(false);
};

  useEffect(() => {
    async function loadPositionGroups() {
      const data = await fetchPositionGroups();
      setPositionGroups(data);
    }

    async function loadPositions() {
      const data = await fetchPositions();
      setPositions(data);
    }

    loadPositionGroups();
    loadPositions();
  }, []);

  return (
    <main>
      <ModalWindow
        isOpen={isOpen}
        newStyles={styles.position_modal_height}
        onClose={() => setIsOpen(false)}
      >
        <div className={styles.position_header}>
          <h3 className={styles.modal_header}>Choose a position</h3>
          <div className={styles.position_header_right}>
            <Search placeholder="Find position..." />
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </div>
        <div className={styles.position_content}>
          <ul className={styles.position_groups}>
            <div
              key={0}
              className={`${styles.position_group} ${styles.selected_position_group}`}
              onClick={() => setActive(0)}
            >
              <span>All</span>
            </div>
            {positionGroups.map((group) => (
              <div
                key={group.id}
                className={`${styles.position_group} ${active === group ? styles.selected_position_group : ""}`}
                onClick={() => setActive(group.id)}
              >
                <span>{group.group_name}</span>
              </div>
            ))}
          </ul>
          <div className={styles.position_records}>
            {positions.map((position) => (
              <div
                key={position.id}
                className={styles.position_record}
                onClick={() => choosePosition(position.id, position.position)}
              >
                <h4>{position.position}</h4>
              </div>
            ))}
          </div>
        </div>
      </ModalWindow>
      <div className={`container ${styles.content}`}>
        <div
          className="container"
          style={{ marginBottom: "40px", height: "49px" }}
        >
          <h2>Add new crew member(s)</h2>
        </div>
        <div style={{ width: "90%" }}>
          <table className={styles.add_table}>
            <thead>
              <tr>
                <th>
                  <h4>Full Name</h4>
                </th>
                <th>
                  <h4>Position</h4>
                </th>
                <th>
                  <h4>Date of birth</h4>
                </th>
                <th>
                  <h4>Sign on date</h4>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>
                    <DataInput
                      placeholder="Full Name"
                      value={record.first_name}
                      onChange={(e) =>
                        handleChange(record.id, "first_name", e.target.value)
                      }
                      className={
                        errors[record.id]?.first_name ? styles.error_input : ""
                      }
                    />
                  </td>
                  <td>
                    <Button
                      className={`${styles.position_button} ${errors[record.id]?.position_id ? styles.error_button : ""}`}
                      borderedButton="true"
                      onClick={() => {
                        setSelectedRecordId(record.id);
                        setIsOpen(true);
                      }}
                    >
                      {record.position || "Position"}
                    </Button>
                  </td>
                  <td>
                    <DataInput
                      type="date"
                      max={new Date().toISOString().split("T")[0]}
                      value={record.date_of_birth}
                      onChange={(e) =>
                        handleChange(record.id, "date_of_birth", e.target.value)
                      }
                      className={
                        errors[record.id]?.date_of_birth
                          ? styles.error_input
                          : ""
                      }
                    />
                  </td>
                  <td>
                    <DataInput
                      type="date"
                      value={record.sign_on_date}
                      onChange={(e) =>
                        handleChange(record.id, "sign_on_date", e.target.value)
                      }
                      className={
                        errors[record.id]?.sign_on_date
                          ? styles.error_input
                          : ""
                      }
                    />
                  </td>
                  <td>
                    <Button
                      className={styles.remove_btn}
                      borderedButton="true"
                      onClick={() => removeRecord(record.id)}
                      disabled={records.length === 1}
                    >
                      ✖
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>
                  <Button className={styles.add_record} onClick={addRecord}>
                    Add record
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttons}>
            <Button onClick={handleSubmit}>Add crew</Button>
            <Link to={links.master}>
              <Button className={styles.back_arrow_space}>
                Back <div className={styles.back_arrow}></div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MasterAdd;
