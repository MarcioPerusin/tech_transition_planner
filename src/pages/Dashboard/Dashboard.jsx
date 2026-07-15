// src/pages/Dashboard/Dashboard.jsx
import {
  FaBook,
  FaLaptop,
  FaRocket,
  FaBullseye,
  FaRegClock,
  FaFileAlt,
} from "react-icons/fa";

import DashboardGrid from "../../components/dashboard/DashboardGrid";
import DashboardCard from "../../components/dashboard/DashboardCard";
import MetricCard from "../../components/dashboard/MetricCard";
import ProgressCard from "../../components/dashboard/ProgressCard";

import {
  dashboardCards,
  metrics,
  progressIndicators,
} from "../../data/dashboardData";

import "./Dashboard.css";

// Association between the icon name and the React component
const iconMap = {
  book: <FaBook />,
  laptop: <FaLaptop />,
  rocket: <FaRocket />,
  target: <FaBullseye />,
  clock: <FaRegClock />,
  file: <FaFileAlt />,
};

function Dashboard() {
  return (
    <main className="dashboard-page">
      {/* Header */}
      <header className="dashboard-page__header">
        <div className="dashboard-page__title-group">
          <h1 className="dashboard-page__title">Dashboard</h1>

          <p className="dashboard-page__description">
            Track your progress on your career transition journey.
          </p>
        </div>
      </header>

      {/* Main cards */}
      <DashboardGrid>
        {dashboardCards.map((card) => (
          <DashboardCard key={card.id} {...card} icon={iconMap[card.icon]} />
        ))}
      </DashboardGrid>

      {/* Métricas */}
      <section className="dashboard-page__metrics">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} icon={iconMap[metric.icon]} />
        ))}
      </section>

      {/* Progress indicators */}
      <section className="dashboard-page__progress">
        {progressIndicators.map((item) => (
          <ProgressCard key={item.id} {...item} />
        ))}
      </section>

      {/* Area reserved for charts */}
      <section className="dashboard-page__charts">
        <div className="dashboard-chart-placeholder">
          📊 Em breve: gráficos de evolução.
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
