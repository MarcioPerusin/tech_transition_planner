// src/components/dashboard/ChartCard.jsx
import "./ChartCard.css";

function ChartCard({ title, subtitle, icon, children, footer }) {
  return (
    <article className="chart-card">
      <header className="chart-card__header">
        <div className="chart-card__title-wrapper">
          {icon && <span className="chart-card__icon">{icon}</span>}

          <div>
            <h3 className="chart-card__title">{title}</h3>

            {subtitle && <p className="chart-card__subtitle">{subtitle}</p>}
          </div>
        </div>
      </header>

      <section className="chart-card__body">{children}</section>

      {footer && <footer className="chart-card__footer">{footer}</footer>}
    </article>
  );
}

export default ChartCard;
