import styles from "../styles/CompanyDashboard.module.css";
import { total_vessels } from "./CompanyPageVessels";

const Dashboard = () => {
  const overallProgress = 75;

  const overviewCards = [
    {
      icon: "📑",
      value: "1,240",
      growth: "+15%",
      label: "Tests Completed",
    },
    {
      icon: "📜",
      value: "921",
      growth: "+10%",
      label: "Certificates Earned",
    },
    {
      icon: "📋",
      value: "238",
      growth: "",
      label: "Pending Tests",
    },
  ];

  const vesselBreakdown = [
    { name: "Titanic", value: 70, className: styles.barOrange },
    { name: "Santa Maria", value: 24, className: styles.barYellow },
    { name: "Enterprise", value: 100, className: styles.barBlue },
    { name: "Bismarck", value: 35, className: styles.barOrange },
  ];

  const topPerforming = [
    { name: "Titanic", value: 70, badge: "TOP 1" },
    { name: "Santa Maria", value: 24},
    { name: "Enterprise", value: 100},
    { name: "Liberty", value: 68},
  ];

  const alerts = [
    {
      icon: "⚠️",
      text: "5 vessels with progress below 25%",
      type: styles.alertDanger,
    },
    {
      icon: "🚨",
      text: "8 crew members with expired certificates",
      type: styles.alertDangerSoft,
    },
    {
      icon: "🕒",
      text: "12 certificates expiring within 7 days",
      type: styles.alertWarning,
    },
    {
      icon: "⚠️",
      text: "3 vessels missed mandatory safety drill updates",
      type: styles.alertDanger,
    },
    {
      icon: "🚨",
      text: "14 crew members have incomplete onboarding tests",
      type: styles.alertDangerSoft,
    },
    {
      icon: "🕒",
      text: "9 medical certificates expire within 14 days",
      type: styles.alertWarning,
    },
    {
      icon: "⚠️",
      text: "2 vessels reported overdue inspection checklists",
      type: styles.alertDanger,
    },
    {
      icon: "🚨",
      text: "6 officers have overdue compliance renewals",
      type: styles.alertDangerSoft,
    },
    {
      icon: "🕒",
      text: "18 training assignments are due this week",
      type: styles.alertWarning,
    },
    {
      icon: "⚠️",
      text: "4 vessels show inconsistent progress reporting",
      type: styles.alertDanger,
    },
    {
      icon: "🚨",
      text: "11 crew profiles are missing valid document uploads",
      type: styles.alertDangerSoft,
    },
    {
      icon: "🕒",
      text: "7 certificates require review by operations today",
      type: styles.alertWarning,
    },
  ];

  const expiringCertificates = [
    { crew: "John Smith", vessel: "Titanic", expires: "04/28/2024" },
    { crew: "Maria Ivanova", vessel: "Santa Maria", expires: "04/30/2024" },
    { crew: "Alex Brown", vessel: "Victory", expires: "05/02/2024" },
    { crew: "Daniel Lee", vessel: "Enterprise", expires: "05/03/2024" },
    { crew: "Sofia Petrova", vessel: "Liberty", expires: "05/04/2024" },
    { crew: "Michael Davis", vessel: "Titanic", expires: "05/05/2024" },
    { crew: "Olga Romanova", vessel: "Santa Maria", expires: "05/06/2024" },
    { crew: "James Wilson", vessel: "Victory", expires: "05/07/2024" },
    { crew: "Anna Morozova", vessel: "Enterprise", expires: "05/08/2024" },
    { crew: "Robert Taylor", vessel: "Liberty", expires: "05/09/2024" },
    { crew: "Elena Sidorova", vessel: "Titanic", expires: "05/10/2024" },
    { crew: "Chris Martin", vessel: "Santa Maria", expires: "05/11/2024" },
    { crew: "Natalia Volkova", vessel: "Victory", expires: "05/12/2024" },
    { crew: "Victor Orlov", vessel: "Enterprise", expires: "05/13/2024" },
    { crew: "Emma Johnson", vessel: "Liberty", expires: "05/14/2024" },
    { crew: "Sergey Kuznetsov", vessel: "Titanic", expires: "05/15/2024" },
    { crew: "Mila Andreeva", vessel: "Santa Maria", expires: "05/16/2024" },
    { crew: "Thomas White", vessel: "Victory", expires: "05/17/2024" },
    { crew: "Irina Belova", vessel: "Enterprise", expires: "05/18/2024" },
    { crew: "Lucas Moore", vessel: "Liberty", expires: "05/19/2024" },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.grid}>
        <section className={`${styles.card} ${styles.totalVessels}`}>
          <h3 className={styles.cardTitle}>Total Vessels</h3>
          <div className={styles.mainValue}>{total_vessels}</div>
        </section>

        <section className={`${styles.card} ${styles.overallProgress}`}>
          <h3 className={styles.cardTitle}>Overall Progress</h3>

          <div className={styles.progressInfo}>
            <div className={styles.mainValue}>{overallProgress}%</div>

            <div className={styles.progressTrackWrap}>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${overallProgress}%` }}
                >
                  <div
                    className={styles.progressGradient}
                    style={{
                      width:
                        overallProgress > 0
                          ? `${100 / (overallProgress / 100)}%`
                          : "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.crewOverview}`}>
          <h3 className={styles.cardTitle}>Crew Testing Overview</h3>

          <div className={styles.overviewCards}>
            {overviewCards.map((item) => (
              <div key={item.label} className={styles.overviewCard}>
                <div className={styles.overviewTop}>
                  <span className={styles.overviewIcon}>{item.icon}</span>
                  <span className={styles.overviewValue}>{item.value}</span>
                  {item.growth ? (
                    <span className={styles.overviewGrowth}>{item.growth}</span>
                  ) : null}
                </div>

                <div className={styles.overviewBottom}>{item.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.overviewFooter}>
            <div className={styles.footerStatCard}>
              <span className={styles.footerStatLabel}>Completion Rate</span>
              <div className={styles.footerStatRow}>
                <b className={styles.footerStatValue}>84%</b>
                <span
                  className={`${styles.footerStatMeta} ${styles.footerMetaUp}`}
                >
                  +6%
                </span>
              </div>
            </div>

            <div className={styles.footerStatCard}>
              <span className={styles.footerStatLabel}>Average Score</span>
              <div className={styles.footerStatRow}>
                <b className={styles.footerStatValue}>91%</b>
                <span
                  className={`${styles.footerStatMeta} ${styles.footerMetaUp}`}
                >
                  +3%
                </span>
              </div>
            </div>

            <div className={styles.footerStatCard}>
              <span className={styles.footerStatLabel}>Active Crew</span>
              <div className={styles.footerStatRow}>
                <b className={styles.footerStatValue}>326</b>
                <span className={styles.footerStatMeta}>This week</span>
              </div>
            </div>

            <div className={styles.footerStatCard}>
              <span className={styles.footerStatLabel}>Overdue Today</span>
              <div className={styles.footerStatRow}>
                <b className={styles.footerStatValue}>12</b>
                <span
                  className={`${styles.footerStatMeta} ${styles.footerMetaDown}`}
                >
                  Attention
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.topPerforming}`}>
          <h3 className={styles.cardTitle}>Top Performing Vessels</h3>

          <div className={styles.topList}>
            {topPerforming.map((item) => (
              <div key={item.name} className={styles.topItem}>
                <div className={styles.topLeft}>
                  <div className={styles.vesselAvatar}>🚢</div>

                  <div className={styles.topMeta}>
                    <div className={styles.topNameRow}>
                      <span className={styles.topName}>{item.name}</span>
                      {item.badge ? (
                        <span className={styles.topBadge}>{item.badge}</span>
                      ) : null}
                    </div>

                    <div className={styles.topMiniTrack}>
                      <div
                        className={styles.topMiniFill}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.topPercent}>{item.value}%</div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.card} ${styles.breakdown}`}>
          <h3 className={styles.cardTitle}>Vessel Progress Breakdown</h3>

          <div className={styles.chart}>
            <div className={styles.yAxis}>
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
              <span>0%</span>
            </div>

            <div className={styles.chartArea}>
              <div className={styles.gridLines}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className={styles.barsRow}>
                {vesselBreakdown.map((item) => (
                  <div key={item.name} className={styles.barItem}>
                    <div className={styles.barWrap}>
                      <div
                        className={`${styles.bar} ${item.className}`}
                        style={{ height: `${item.value}%` }}
                      />
                    </div>

                    <div className={styles.barLabel}>{item.name}</div>
                    <div className={styles.barValue}>{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.alerts}`}>
          <h3 className={styles.cardTitle}>Alerts &amp; Issues</h3>

          <div className={styles.alertListScroll}>
            <div className={styles.alertList}>
              {alerts.map((item, index) => (
                <div
                  key={`${item.text}-${index}`}
                  className={`${styles.alertItem} ${item.type}`}
                >
                  <span className={styles.alertIcon}>{item.icon}</span>
                  <span className={styles.alertText}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.crewStatus}`}>
          <h3 className={styles.cardTitle}>Crew Status</h3>

          <div className={styles.statusContent}>
            <div className={styles.pieWrap}>
              <div className={styles.pieChart}>
                <div className={styles.pieCenter}>
                  <span className={styles.pieCenterValue}>54%</span>
                  <span className={styles.pieCenterLabel}>Completed</span>
                </div>
              </div>
            </div>

            <div className={styles.statusLegend}>
              <div className={styles.legendCard}>
                <div className={styles.legendLeft}>
                  <span className={`${styles.legendDot} ${styles.green}`} />
                  <span className={styles.legendLabel}>Completed</span>
                </div>
                <span className={styles.legendValue}>54%</span>
              </div>

              <div className={styles.legendCard}>
                <div className={styles.legendLeft}>
                  <span className={`${styles.legendDot} ${styles.yellow}`} />
                  <span className={styles.legendLabel}>In Progress</span>
                </div>
                <span className={styles.legendValue}>32%</span>
              </div>

              <div className={styles.legendCard}>
                <div className={styles.legendLeft}>
                  <span className={`${styles.legendDot} ${styles.red}`} />
                  <span className={styles.legendLabel}>Overdue</span>
                </div>
                <span className={styles.legendValue}>14%</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.expiring}`}>
          <h3 className={styles.cardTitle}>Expiring Certificates</h3>

          <div className={styles.tableWrap}>
            <div className={styles.tableHeader}>
              <span>Crew Member</span>
              <span>Vessel</span>
              <span>Expires</span>
            </div>

            <div className={styles.tableBodyScroll}>
              {expiringCertificates.map((item, index) => (
                <div
                  key={`${item.crew}-${item.vessel}-${index}`}
                  className={styles.tableRow}
                >
                  <span>{item.crew}</span>
                  <span>{item.vessel}</span>
                  <span>{item.expires}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
