// src/pages/Dashboard/Dashboard.jsx

import DashboardCard from "../../components/dashboard/DashboardCard";
import DashboardGrid from "../../components/dashboard/DashboardGrid";

import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-page__header">
        <h1 className="dashboard-page__title">Painel de Controle</h1>

        <p className="dashboard-page__description">
          Acompanhe sua evolução na jornada de transição de carreira.
        </p>
      </header>

      <DashboardGrid className="dashboard-page__grid">
        <DashboardCard
          title="Cursos"
          color="#2563eb"
          value="4"
          subtitle="120 horas"
          icon="📚"
          footer="Ver detalhes"
        />

        <DashboardCard
          title="Projetos"
          color="#25eb77"
          value="3"
          subtitle="2 concluídos"
          icon="💻"
          footer="Ver detalhes"
        />

        <DashboardCard
          title="Competências"
          color="#eb6e25"
          value="18"
          subtitle="Front-End"
          icon="🚀"
          footer="Ver detalhes"
        />

        <DashboardCard
          title="Metas"
          color="#bf2ecc"
          value="7"
          subtitle="5 concluídas"
          icon="🎯"
          footer="Ver detalhes"
        />
      </DashboardGrid>
    </main>
  );
}

export default Dashboard;
