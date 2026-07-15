// src/components/dashboard/MetricCard.jsx
import "./MetricCard.css";

function MetricCard({
  label,
  metric,
  icon,
  variation,
  variationType = "neutral",
  className = "",
}) {
  return (
    <article className={`metric-card ${className}`}>
      <header className="metric-card__header">
        {icon && <span className="metric-card__icon">{icon}</span>}

        <span className="metric-card__label">{label}</span>
      </header>

      <div className="metric-card__body">
        <strong className="metric-card__value">{metric}</strong>

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
