// src/components/dashboard/DashboardCard.jsx
import "./DashboardCard.css";

function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  color = "#2563eb",
  footer,
  children,
  className = "",
}) {
  return (
    <article
      className={`dashboard-card ${className}`}
      style={{
        borderTopColor: color,
      }}
    >
      <header className="dashboard-card__header">
        {icon && <div className="dashboard-card__icon">{icon}</div>}

        <h3 className="dashboard-card__title">{title}</h3>
      </header>

      <div className="dashboard-card__body">
        <strong className="dashboard-card__value">{value}</strong>

        {subtitle && <p className="dashboard-card__subtitle">{subtitle}</p>}

        {children}
      </div>

      {footer && <footer className="dashboard-card__footer">{footer}</footer>}
    </article>
  );
}

export default DashboardCard;
