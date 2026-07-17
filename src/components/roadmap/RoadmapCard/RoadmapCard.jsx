// src/components/roadmap/RoadmapCard/RoadmapCard.jsx
import StatusBadge from "../../common/StatusBadge/StatusBadge";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";

import "./RoadmapCard.css";

function RoadmapCard({
  title,
  institution,
  hours,
  progress = 0,
  status = "Não iniciado",
  dueDate,
  color = "#2563eb",
  onViewDetails,
}) {
  const safeProgress = Math.min(Math.max(Number(progress) || 0, 0), 100);

  return (
    <article className="roadmap-card" style={{ "--roadmap-card-color": color }}>
      <header className="roadmap-card__header">
        <div className="roadmap-card__icon" aria-hidden="true">
          <FaBookOpen />
        </div>

        <div className="roadmap-card__title-group">
          <h3 className="roadmap-card__title">{title}</h3>

          <p className="roadmap-card__institution">{institution}</p>
        </div>

        <StatusBadge status={status} size="small" />
      </header>

      <div className="roadmap-card__details">
        <div className="roadmap-card__detail">
          <FaClock aria-hidden="true" />
          <span>{hours} hours</span>
        </div>

        {dueDate && (
          <div className="roadmap-card__detail">
            <FaCalendarAlt aria-hidden="true" />
            <span>Prevision: {dueDate}</span>
          </div>
        )}
      </div>

      <div className="roadmap-card__progress">
        <div className="roadmap-card__progress-header">
          <span>Progress</span>
          <strong>{safeProgress}%</strong>
        </div>

        <div
          className="roadmap-card__progress-track"
          role="progressbar"
          aria-label={`Progresso do curso ${title}`}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={safeProgress}
        >
          <div
            className="roadmap-card__progress-fill"
            style={{ width: `${safeProgress}%` }}
          />
        </div>
      </div>

      <footer className="roadmap-card__footer">
        <button
          className="roadmap-card__button"
          type="button"
          onClick={onViewDetails}
        >
          Ver detalhes
          <FaChevronRight aria-hidden="true" />
        </button>
      </footer>
    </article>
  );
}

export default RoadmapCard;
