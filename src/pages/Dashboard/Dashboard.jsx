// src/pages/Dashboard/Dashboard.jsx
import {
  FaBook,
  FaLaptop,
  FaRocket,
  FaBullseye,
  FaRegClock,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

import DashboardGrid from "../../../src/components/dashboard/DashboardGrid/DashboardGrid";
import DashboardCard from "../../../src/components/dashboard/DashboardCard/DashboardCard";
import MetricCard from "../../../src/components/dashboard/MetricCard/MetricCard";
import ProgressCard from "../../../src/components/dashboard/ProgressCard/ProgressCard";
import ChartCard from "../../../src/components/dashboard/ChartCard/ChartCard";
import ChartPlaceholder from "../../../src/components/dashboard/ChartPlaceholder/ChartPlaceholder";

import {
  dashboardCards,
  metrics,
  progressIndicators,
} from "../../data/dashboardData";

import { chartsData } from "../../data/chartsData";

import "./Dashboard.css";

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

      {/* Main Dashboard Cards */}
      <DashboardGrid>
        {dashboardCards.map((card) => (
          <DashboardCard key={card.id} {...card} icon={iconMap[card.icon]} />
        ))}
      </DashboardGrid>

      {/* Metric Cards */}
      <section className="dashboard-page__metrics">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} icon={iconMap[metric.icon]} />
        ))}
      </section>

      {/* Progress Indicators */}
      <section className="dashboard-page__progress">
        {progressIndicators.map((item) => (
          <ProgressCard key={item.id} {...item} />
        ))}
      </section>

      {/* Charts */}
      <section className="dashboard-page__charts">
        {chartsData.map((chart) => (
          <ChartCard key={chart.id} title={chart.title} icon={<FaChartLine />}>
            <ChartPlaceholder
              title={chart.title}
              description={chart.description}
            />
          </ChartCard>
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
