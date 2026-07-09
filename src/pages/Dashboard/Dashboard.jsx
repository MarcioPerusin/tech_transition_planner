// src/pages/Dashboard/Dashboard.jsx

import {
  FaBook,
  FaLaptop,
  FaRocket,
  FaBullseye,
  FaRegClock,
} from "react-icons/fa";

import DashboardCard from "../../components/dashboard/DashboardCard";
import DashboardGrid from "../../components/dashboard/DashboardGrid";
import MetricCard from "../../components/dashboard/MetricCard";

import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-page__header">
        <div className="dashboard-page__title-group">
          <h1 className="dashboard-page__title">Dashboard</h1>

          <p className="dashboard-page__description">
            Acompanhe sua evolução na jornada de transição de carreira.
          </p>
        </div>
      </header>

      {/* DashboardCard */}
      <DashboardGrid className="dashboard-page__cards">
        <DashboardCard
          title="Cursos"
          icon={<FaBook />}
          color="#2563eb"
          value="4"
          subtitle="2 concluídos"
          footer="Ver Roadmap"
        />

        <DashboardCard
          title="Projetos"
          icon={<FaLaptop />}
          color="#16a34a"
          value="6"
          subtitle="4 publicados"
          footer="Ver Projetos"
        />

        <DashboardCard
          title="Competências"
          icon={<FaRocket />}
          color="#ea580c"
          value="18"
          subtitle="12 dominadas"
          footer="Ver Competências"
        />

        <DashboardCard
          title="Metas"
          icon={<FaBullseye />}
          color="#9333ea"
          value="9"
          subtitle="6 concluídas"
          footer="Ver Metas"
        />
      </DashboardGrid>

      {/* Métricas */}
      <section className="dashboard-page__metrics">
        <MetricCard
          icon={<FaRegClock />}
          label="Horas estudadas"
          metric="256 h"
          variation="+18h esta semana"
          variationType="positive"
        />
        <MetricCard
          icon={<FaRocket />}
          label="Career Readiness"
          metric="82%"
          variation="+4%"
          variationType="positive"
        />
        <MetricCard
          icon={<FaLaptop />}
          label="Projetos"
          metric="8"
          variation="0"
          variationType="neutral"
        />
        <MetricCard icon="📄" label="Currículo" metric="100%" />
      </section>
    </main>
  );
}

export default Dashboard;
