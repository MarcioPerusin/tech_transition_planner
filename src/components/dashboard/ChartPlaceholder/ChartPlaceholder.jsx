// src/components/dashboard/ChartPlaceholder.jsx
import "./ChartPlaceholder.css";

function ChartPlaceholder({
  icon = "📊",
  title = "Chart under development",
  description = "The data will be displayed automatically when information becomes available.",
}) {
  return (
    <div className="chart-placeholder">
      <div className="chart-placeholder__icon">{icon}</div>

      <h4 className="chart-placeholder__title">{title}</h4>

      <p className="chart-placeholder__description">{description}</p>
    </div>
  );
}

export default ChartPlaceholder;
