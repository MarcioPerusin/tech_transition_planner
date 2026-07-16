// src/components/dashboard/DashboardGrid.jsx
import "./DashboardGrid.css";

function DashboardGrid({ children, className = "" }) {
  return (
    <section className={`dashboard-grid ${className}`}>{children}</section>
  );
}

export default DashboardGrid;
