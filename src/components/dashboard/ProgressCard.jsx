// src/components/dashboard/ProgressCard.jsx
import "./ProgressCard.css";

function ProgressCard({ title, percentage, color = "#2563eb", description }) {
  return (
    <div className="progress-card">
      <div className="progress-card__header">
        <span className="progress-card__title">{title}</span>

        <span className="progress-card__percentage" style={{ color }}>
          {percentage}%
        </span>
      </div>

      <div className="progress-card__bar">
        <div
          className="progress-card__fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>

      <p className="progress-card__description">{description}</p>
    </div>
  );
}

export default ProgressCard;
