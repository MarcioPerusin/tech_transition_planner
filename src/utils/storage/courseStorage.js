// src/utils/storage/courseStorage.js
const COURSES_STORAGE_KEY = "tech-transition-planner:courses";

export function loadCourses() {
  const storedCourses = localStorage.getItem(COURSES_STORAGE_KEY);

  if (!storedCourses) {
    return null;
  }

  try {
    const parsedCourses = JSON.parse(storedCourses);

    return Array.isArray(parsedCourses) ? parsedCourses : null;
  } catch (error) {
    console.error("Failed to load courses from localStorage:", error);

    return null;
  }
}

export function saveCourses(courses = []) {
  try {
    localStorage.setItem(
      COURSES_STORAGE_KEY,
      JSON.stringify(courses),
    );

    return true;
  } catch (error) {
    console.error("Failed to save courses to localStorage:", error);

    return false;
  }
}