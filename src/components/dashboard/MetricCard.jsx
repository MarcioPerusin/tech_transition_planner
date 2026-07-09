// src/components/dashboard/MetricCard.jsx

import "./MetricCard.css";

function MetricCard({
  label,
  metric,
  icon,
  variation,
  variationType = "positive",
}) {
  return (
    <article className="metric-card">
      <div className="metric-card__header">
        {icon && <span className="metric-card__icon">{icon}</span>}

        <span className="metric-card__label">{label}</span>
      </div>

      <div className="metric-card__body">
        <h2 className="metric-card__value">{metric}</h2>

        {variation && (
          <span
            className={`metric-card__variation metric-card__variation--${variationType}`}
          >
            {variation}
          </span>
        )}
      </div>
    </article>
  );
}

export default MetricCard;
