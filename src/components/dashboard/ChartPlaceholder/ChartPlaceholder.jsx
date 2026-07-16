// src/components/dashboard/ChartPlaceholder.jsx
import "./ChartPlaceholder.css";

function ChartPlaceholder({
  icon = "📊",
  title = "Gráfico em desenvolvimento",
  description = "Os dados serão exibidos automaticamente quando houver informações disponíveis.",
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
