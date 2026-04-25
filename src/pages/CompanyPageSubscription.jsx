import styles from "../styles/CompanyPageSubscription.module.css";

const subscription = {
  planName: "Fleet Annual Contract",
  status: "Active",
  provider: "Muireolais Maritime Safety Platform",
  contractPeriod: "01 Jan 2025 — 31 Dec 2025",
  contractLength: "12 months",
  vesselPrice: 1500,
  vesselCount: 20,
  currency: "EUR",
  renewalDate: "31 Dec 2025",
  nextInvoiceDate: "01 Jan 2026",
  billingCycle: "Annual",
  supportLevel: "Priority Support",
};

const features = [
  "Unlimited access to safety video lessons",
  "Crew testing and assessment workflows",
  "Certificate tracking and renewal reminders",
  "Fleet-wide progress dashboard and analytics",
  "Crew member learning history and status overview",
  "Priority support for company administrators",
];

const history = [
  {
    contract: "Fleet Contract 2025",
    period: "01 Jan 2025 — 31 Dec 2025",
    vessels: 20,
    amount: "€30,000",
    status: "Active",
  },
  {
    contract: "Fleet Contract 2024",
    period: "01 Jan 2024 — 31 Dec 2024",
    vessels: 18,
    amount: "€27,000",
    status: "Completed",
  },
  {
    contract: "Fleet Contract 2023",
    period: "01 Jan 2023 — 31 Dec 2023",
    vessels: 15,
    amount: "€22,500",
    status: "Completed",
  },
];

const includedModules = [
  {
    title: "Safety Courses",
    desc: "Video lessons and mandatory training programs for maritime crew.",
  },
  {
    title: "Testing & Exams",
    desc: "Knowledge assessments, pass tracking, and completion visibility.",
  },
  {
    title: "Certificate Management",
    desc: "Expiration monitoring and centralized certificate control.",
  },
  {
    title: "Fleet Analytics",
    desc: "Progress, performance, and compliance overview across all vessels.",
  },
];

const CompanyPageSubscription = () => {
  const totalAnnualCost = subscription.vesselPrice * subscription.vesselCount;
  const monthlyEquivalent = Math.round(totalAnnualCost / 12);

  return (
    <div className={styles.container}>
      <section className={styles.heroCard}>
        <div className={styles.heroTop}>
          <div className={styles.heroLeft}>
            <div className={styles.planBadgeRow}>
              <span className={styles.planType}>Subscription</span>
              <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                {subscription.status}
              </span>
            </div>

            <h2 className={styles.planTitle}>{subscription.planName}</h2>

            <p className={styles.planSubtitle}>
              Your company currently has an active maritime safety services
              contract covering vessel training access, courses, testing, and
              certificate workflows for subscribed vessels.
            </p>
          </div>

          <div className={styles.heroRight}>
            <button type="button" className={styles.primaryButton}>
              Renew Contract
            </button>

            <button type="button" className={styles.secondaryButton}>
              Manage Subscription
            </button>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Annual Contract Value</span>
            <span className={styles.statValue}>€{totalAnnualCost.toLocaleString()}</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>Subscribed Vessels</span>
            <span className={styles.statValue}>{subscription.vesselCount}</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>Price Per Vessel / Year</span>
            <span className={styles.statValue}>€{subscription.vesselPrice}</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>Monthly Equivalent</span>
            <span className={styles.statValue}>€{monthlyEquivalent.toLocaleString()}</span>
          </div>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={styles.card}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Contract Overview</h3>
            <span className={styles.sectionHint}>Current agreement details</span>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Provider</span>
              <span className={styles.infoValue}>{subscription.provider}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Contract Period</span>
              <span className={styles.infoValue}>{subscription.contractPeriod}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Contract Length</span>
              <span className={styles.infoValue}>{subscription.contractLength}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Billing Cycle</span>
              <span className={styles.infoValue}>{subscription.billingCycle}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Renewal Date</span>
              <span className={styles.infoValue}>{subscription.renewalDate}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Next Invoice Date</span>
              <span className={styles.infoValue}>{subscription.nextInvoiceDate}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Support Level</span>
              <span className={styles.infoValue}>{subscription.supportLevel}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Coverage</span>
              <span className={styles.infoValue}>
                {subscription.vesselCount} vessels under contract
              </span>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Billing Summary</h3>
            <span className={styles.sectionHint}>Current pricing structure</span>
          </div>

          <div className={styles.billingBox}>
            <div className={styles.billingMain}>
              <span className={styles.billingAmount}>€{totalAnnualCost.toLocaleString()}</span>
              <span className={styles.billingPeriod}>per contract year</span>
            </div>

            <div className={styles.billingBreakdown}>
              <div className={styles.breakdownRow}>
                <span>Price per vessel</span>
                <span>€{subscription.vesselPrice}</span>
              </div>

              <div className={styles.breakdownRow}>
                <span>Subscribed vessels</span>
                <span>{subscription.vesselCount}</span>
              </div>

              <div className={styles.breakdownRow}>
                <span>Estimated monthly equivalent</span>
                <span>€{monthlyEquivalent.toLocaleString()}</span>
              </div>

              <div className={`${styles.breakdownRow} ${styles.breakdownTotal}`}>
                <span>Total annual amount</span>
                <span>€{totalAnnualCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.featuresCard}`}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Included in Subscription</h3>
            <span className={styles.sectionHint}>What your company can use</span>
          </div>

          <div className={styles.featureList}>
            {features.map((feature) => (
              <div key={feature} className={styles.featureItem}>
                <span className={styles.featureDot} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.card} ${styles.modulesCard}`}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Platform Modules</h3>
            <span className={styles.sectionHint}>Services available under contract</span>
          </div>

          <div className={styles.moduleGrid}>
            {includedModules.map((module) => (
              <div key={module.title} className={styles.moduleItem}>
                <span className={styles.moduleTitle}>{module.title}</span>
                <span className={styles.moduleDesc}>{module.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.card} ${styles.renewalCard}`}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Renewal & Management</h3>
            <span className={styles.sectionHint}>Plan next contract steps</span>
          </div>

          <div className={styles.renewalContent}>
            <div className={styles.renewalBox}>
              <span className={styles.renewalLabel}>Upcoming renewal</span>
              <span className={styles.renewalValue}>{subscription.renewalDate}</span>
              <p className={styles.renewalText}>
                Renew the contract before the expiration date to ensure uninterrupted
                access to courses, testing, and certificate services for all subscribed vessels.
              </p>
            </div>

            <div className={styles.actionList}>
              <button type="button" className={styles.primaryButtonFull}>
                Extend for 1 More Year
              </button>

              <button type="button" className={styles.secondaryButtonFull}>
                Increase Vessel Quantity
              </button>

              <button type="button" className={styles.secondaryButtonFull}>
                Download Contract Summary
              </button>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.historyCard}`}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Contract History</h3>
            <span className={styles.sectionHint}>Past and current agreements</span>
          </div>

          <div className={styles.historyTable}>
            <div className={styles.historyHead}>
              <span>Contract</span>
              <span>Period</span>
              <span>Vessels</span>
              <span>Amount</span>
              <span>Status</span>
            </div>

            <div className={styles.historyBody}>
              {history.map((item) => (
                <div key={item.contract} className={styles.historyRow}>
                  <span>{item.contract}</span>
                  <span>{item.period}</span>
                  <span>{item.vessels}</span>
                  <span>{item.amount}</span>
                  <span
                    className={`${styles.tableStatus} ${
                      item.status === "Active"
                        ? styles.tableStatusActive
                        : styles.tableStatusCompleted
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompanyPageSubscription;