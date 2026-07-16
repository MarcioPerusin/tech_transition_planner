// src/utils/dashboardCalculations.js

// Calculate completion percentage
// Receives an array of objects that have the "completed" property
export function calculateProgress(items = [], property = "completed") {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  const completed = items.filter((item) => Boolean(item[property])).length;

  return Math.round((completed / items.length) * 100);
}

// Cursos
export function calculateCourseProgress(courses = []) {
  return calculateProgress(courses);
}

// Projetos
export function calculateProjectProgress(projects = []) {
  return calculateProgress(projects);
}

// Competências
export function calculateSkillProgress(skills = []) {
  return calculateProgress(skills);
}

// Metas
export function calculateGoalProgress(goals = []) {
  return calculateProgress(goals);
}

// Career Readiness

// Calcula a média geral dos indicadores.
export function calculateCareerReadiness({
  courses = [],
  projects = [],
  skills = [],
  goals = [],
}) {
  const values = [
    calculateCourseProgress(courses),
    calculateProjectProgress(projects),
    calculateSkillProgress(skills),
    calculateGoalProgress(goals),
  ];

  const average =
    values.reduce((sum, value) => sum + value, 0) / values.length;

  return Math.round(average);
}

// Full dashboard
export function calculateDashboard(data) {
  return {
    courseProgress: calculateCourseProgress(data.courses),

    projectProgress: calculateProjectProgress(data.projects),

    skillProgress: calculateSkillProgress(data.skills),

    goalProgress: calculateGoalProgress(data.goals),

    careerReadiness: calculateCareerReadiness(data),
  };
}
