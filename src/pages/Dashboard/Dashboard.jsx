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
import ProgressCard from "../../components/dashboard/ProgressCard";

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

      {/* MetricCards */}
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

      {/* Progress Indicators */}
      <section className="dashboard-page__progress">
        <ProgressCard
          title="Empregabilidade"
          percentage={82}
          color="#2563eb"
          description="Perfil pronto para iniciar candidaturas."
        />

        <ProgressCard
          title="Perfil Técnico"
          percentage={74}
          color="#16a34a"
          description="Boa evolução nas competências."
        />

        <ProgressCard
          title="Portfólio"
          percentage={90}
          color="#9333ea"
          description="Projetos quase completos."
        />

        <ProgressCard
          title="Networking"
          percentage={45}
          color="#ea580c"
          description="Continue ampliando sua rede."
        />

        <ProgressCard
          title="GitHub"
          percentage={76}
          color="#0f766e"
          description="Bom número de commits."
        />

        <ProgressCard
          title="LinkedIn"
          percentage={92}
          color="#2563eb"
          description="Perfil praticamente finalizado."
        />
      </section>
    </main>
  );
}

export default Dashboard;
