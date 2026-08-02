// src/utils/validation/courseValidation.js
export const validateCourseTitle = (title = "") => {
  if (!title.trim()) {
    return "Course title is required.";
  }

  return "";
};

export const validateInstitution = (institution = "") => {
  if (!institution.trim()) {
    return "Institution is required.";
  }

  return "";
};

export const validateCourseHours = (hours = "") => {
  if (String(hours).trim() === "") {
    return "Course hours are required.";
  }

  const numericHours = Number(hours);

  if (!Number.isFinite(numericHours) || numericHours <= 0) {
    return "Course hours must be greater than zero.";
  }

  return "";
};

export const validateCourseProgress = (progress = "") => {
  if (String(progress).trim() === "") {
    return "Course progress is required.";
  }

  const numericProgress = Number(progress);

  if (!Number.isFinite(numericProgress)) {
    return "Course progress must be a valid number.";
  }

  if (numericProgress < 0 || numericProgress > 100) {
    return "Course progress must be between 0 and 100.";
  }

  return "";
};

export const validateCourseDueDate = (dueDate = "") => {
  const normalizedDueDate = String(dueDate).trim();

  if (!normalizedDueDate) {
    return "Due date is required.";
  }

  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!datePattern.test(normalizedDueDate)) {
    return "Due date must be a valid date.";
  }

  const [year, month, day] = normalizedDueDate
    .split("-")
    .map(Number);

  const parsedDate = new Date(year, month - 1, day);

  const isValidDate =
    parsedDate.getFullYear() === year &&
    parsedDate.getMonth() === month - 1 &&
    parsedDate.getDate() === day;

  if (!isValidDate) {
    return "Due date must be a valid date.";
  }

  return "";
};

export const validateCourse = (courseData = {}) => {
  return {
    title: validateCourseTitle(courseData.title),
    institution: validateInstitution(courseData.institution),
    hours: validateCourseHours(courseData.hours),
    progress: validateCourseProgress(courseData.progress),
    dueDate: validateCourseDueDate(courseData.dueDate),
  };
};

export const hasValidationErrors = (errors = {}) => {
  return Object.values(errors).some(Boolean);
};