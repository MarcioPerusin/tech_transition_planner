// src/components/common/StatusBadge/StatusBadge.jsx
import {
  FaCheck,
  FaClock,
  FaExclamationTriangle,
  FaLock,
  FaPause,
  FaPlay,
} from "react-icons/fa";

import "./StatusBadge.css";

const statusConfig = {
  completed: {
    label: "Completed",
    icon: FaCheck,
    className: "completed",
  },

  "in-progress": {
    label: "In Progress",
    icon: FaPlay,
    className: "in-progress",
  },

  pending: {
    label: "Not Started",
    icon: FaClock,
    className: "pending",
  },

  delayed: {
    label: "Late",
    icon: FaExclamationTriangle,
    className: "delayed",
  },

  paused: {
    label: "Paused",
    icon: FaPause,
    className: "paused",
  },

  locked: {
    label: "Blocked",
    icon: FaLock,
    className: "locked",
  },
};

const statusAliases = {
  // Portuguese
  concluido: "completed",
  concluído: "completed",

  "em-andamento": "in-progress",
  "em andamento": "in-progress",

  pendente: "pending",
  "nao-iniciado": "pending",
  "não-iniciado": "pending",
  "nao iniciado": "pending",
  "não iniciado": "pending",

  atrasado: "delayed",

  pausado: "paused",

  bloqueado: "locked",

  // English
  complete: "completed",
  completed: "completed",

  progress: "in-progress",
  "in-progress": "in-progress",
  "in progress": "in-progress",

  pending: "pending",
  "not-started": "pending",
  "not started": "pending",

  delayed: "delayed",

  paused: "paused",

  blocked: "locked",
  locked: "locked",
};

function normalizeStatus(status) {
  if (!status) {
    return "pending";
  }

  const normalizedStatus = String(status)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return statusAliases[normalizedStatus] || normalizedStatus;
}

function StatusBadge({
  status = "pending",
  label,
  showIcon = true,
  size = "medium",
  className = "",
}) {
  const normalizedStatus = normalizeStatus(status);

  const currentStatus = statusConfig[normalizedStatus] || statusConfig.pending;

  const StatusIcon = currentStatus.icon;

  const badgeClassName = [
    "status-badge",
    `status-badge--${currentStatus.className}`,
    `status-badge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={badgeClassName}
      aria-label={`Status: ${label || currentStatus.label}`}
      title={label || currentStatus.label}
    >
      {showIcon && (
        <StatusIcon className="status-badge__icon" aria-hidden="true" />
      )}

      <span className="status-badge__label">
        {label || currentStatus.label}
      </span>
    </span>
  );
}

export default StatusBadge;
