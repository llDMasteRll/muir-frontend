import Search from "../components/UI/Search/Search";
import styles from "../styles/CompanyPageVessels.module.css";
import { useState } from "react";

const vessels = [
    { name: "Titanic", id: 452653, status: "Active", performance: 65 },
    { name: "Santa Maria", id: 246532, status: "Active", performance: 10 },
    { name: "Victory", id: 893463, status: "Active", performance: 27 },
    { name: "Bismarck", id: 163126, status: "Active", performance: 50 },
    { name: "Enterprise", id: 183270, status: "Active", performance: 79 },
    { name: "Cutty Sark", id: 963257, status: "Active", performance: 100 },
    { name: "Mayflower", id: 863453, status: "Active", performance: 91 },
    { name: "Queen Mary 2", id: 132564, status: "Active", performance: 0 },
    { name: "HMS Endeavour", id: 472819, status: "Active", performance: 58 },
    { name: "Golden Hind", id: 915204, status: "Not Active", performance: 12 },
    { name: "USS Constitution", id: 381627, status: "Active", performance: 84 },
    { name: "Black Pearl", id: 724519, status: "Active", performance: 33 },
    { name: "Flying Dutchman", id: 159302, status: "Not Active", performance: 97 },
  ];

const CompanyPageVessels = () => {
  const [query, setQuery] = useState("");

  const clear = () => setQuery("");

  // Фильтруем по имени или по ID
  const filteredVessels = vessels.filter((v) => {
    const q = query.toLowerCase();
    return v.name.toLowerCase().includes(q) || v.id.toString().includes(q);
  });

  return (
    <div className={styles.container}>
      {/* ===== Header: Search + New Vessel ===== */}
      <div className={styles.header}>
        {/* Search Bar */}
        <div className={styles.search}>
          <span className={styles.icon}>🔍</span>
          <input
            type="text"
            placeholder="Search vessels..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ color: "black" }}
          />
          <span
            className={styles.mic}
            onClick={clear} // очищает поле по клику на микрофон
          >
            🎤
          </span>
        </div>

        {/* New Vessel Button */}
        <button className={styles.addVessel}>New Vessel</button>
      </div>

      {/* ===== Vessel Cards ===== */}

      <div className={styles.vesselCards}>
        {filteredVessels.map((v) => (
          <div key={v.id} className={styles.vessel}>
            <div className={styles.vesselPicture}></div>
            <p className={styles.name}>{v.name}</p>
            <p className={styles.meta}>ID: {v.id}</p>
            <p className={styles.meta}>Status: {v.status}</p>

            <div className={styles.progressBlock}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    boxShadow: `${3.08 * v.performance - 308}px 0px inset #e5e7eb`,
                  }}
                ></div>
              </div>

              <div className={styles.progressText}>
                <span>Performance</span>
                <span>{v.performance}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export const total_vessels = vessels.length;
export default CompanyPageVessels;
