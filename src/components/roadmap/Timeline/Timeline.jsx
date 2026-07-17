// src/components/roadmap/Timeline/Timeline.jsx
import StatusBadge from "../../common/StatusBadge/StatusBadge";

import "./Timeline.css";

function TimelineItem({ item, isLast }) {
  const {
    title,
    description,
    date,
    hours,
    progress = 0,
    status = "pending",
  } = item;

  const safeProgress = Math.min(Math.max(Number(progress) || 0, 0), 100);

  return (
    <li className={`timeline__item timeline__item--${status}`}>
      <div className="timeline__marker-column">
        <span className="timeline__marker" aria-hidden="true">
          <span className="timeline__marker-dot" />
        </span>

        {!isLast && <span className="timeline__connector" aria-hidden="true" />}
      </div>

      <article className="timeline__content">
        <header className="timeline__header">
          <div className="timeline__title-group">
            <h4 className="timeline__title">{title}</h4>

            {description && (
              <p className="timeline__description">{description}</p>
            )}
          </div>

          <StatusBadge status={status} size="small" />
        </header>

        {(date || hours !== undefined) && (
          <div className="timeline__metadata">
            {date && (
              <span className="timeline__metadata-item">Previsão: {date}</span>
            )}

            {hours !== undefined && hours !== null && (
              <span className="timeline__metadata-item">
                {hours} {Number(hours) === 1 ? "hora" : "horas"}
              </span>
            )}
          </div>
        )}

        <div className="timeline__progress">
          <div className="timeline__progress-header">
            <span>Progresso</span>
            <strong>{safeProgress}%</strong>
          </div>

          <div
            className="timeline__progress-track"
            role="progressbar"
            aria-label={`Progresso de ${title}`}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={safeProgress}
          >
            <span
              className="timeline__progress-fill"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>
      </article>
    </li>
  );
}

function Timeline({
  items = [],
  title = "Etapas do curso",
  emptyMessage = "Nenhuma etapa cadastrada.",
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <section className="timeline timeline--empty">
        <p className="timeline__empty-message">{emptyMessage}</p>
      </section>
    );
  }

  return (
    <section className="timeline" aria-labelledby="timeline-title">
      <div className="timeline__section-header">
        <h3 className="timeline__section-title" id="timeline-title">
          {title}
        </h3>

        <span className="timeline__count">
          {items.length} {items.length === 1 ? "etapa" : "etapas"}
        </span>
      </div>

      <ol className="timeline__list">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id ?? `${item.title}-${index}`}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}

export default Timeline;
