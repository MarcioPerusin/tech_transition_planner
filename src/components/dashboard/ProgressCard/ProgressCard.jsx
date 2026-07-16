// src/components/dashboard/ProgressCard.jsx
import "./ProgressCard.css";

function ProgressCard({
  title,
  percentage = 0,
  color = "#2563eb",
  description,
  className = "",
}) {
  const progress = Math.min(Math.max(percentage, 0), 100);

  return (
    <article className={`progress-card ${className}`}>
      <header className="progress-card__header">
        <span className="progress-card__title">{title}</span>

        <span className="progress-card__percentage" style={{ color }}>
          {progress}%
        </span>
      </header>

      <div className="progress-card__bar">
        <div
          className="progress-card__fill"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>

      {description && (
        <p className="progress-card__description">{description}</p>
      )}
    </article>
  );
}

export default ProgressCard;
