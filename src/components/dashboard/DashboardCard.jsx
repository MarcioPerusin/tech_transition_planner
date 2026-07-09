// src/components/dashboard/DashboardCard.jsx

import "./DashboardCard.css";

function DashboardCard({
  title,
  color,
  value,
  subtitle,
  icon,
  children,
  footer,
}) {
  return (
    <article
      className="dashboard-card"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <div className="dashboard-card__header">
        <div className="dashboard-card__icon">{icon}</div>

        <h3 className="dashboard-card__title">{title}</h3>
      </div>

      <div className="dashboard-card__body">
        <p className="dashboard-card__value">{value}</p>

        {subtitle && <p className="dashboard-card__subtitle">{subtitle}</p>}

        {children}

        {footer && <div className="dashboard-card__footer">{footer}</div>}
      </div>
    </article>
  );
}

export default DashboardCard;
