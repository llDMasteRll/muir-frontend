import styles from "../styles/CompanyDashboard.module.css";
import { total_vessels } from "./CompanyPageVessels";

const Dashboard = () => {
  const performance = 74;

  return (
    <div className={styles.container}>
      <div className={styles.totalVessels}>
        <p>Total Vessels</p>
        <span>{total_vessels}</span>
      </div>

      <div className={styles.overallProgress}>
        <p>Overall Progress</p>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span>{performance}%</span>
          <div className={styles.progressBlock}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  // 1. Управляем только видимой шириной
                  width: `${performance}%`,
                  
                  // 2. Растягиваем градиент фона, чтобы он не сжимался.
                  // (100 / performance * 100) — это магия, которая держит красный слева, а зеленый справа
                  backgroundSize: `${(100 / performance) * 100}% 100%`,
                  
                  // 3. Плавная анимация при изменении процентов
                  transition: "width 0.4s ease, background-size 0.4s ease",
                  
                  // Принудительно подтверждаем скругление для Safari/iOS
                  borderRadius: "20px"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
