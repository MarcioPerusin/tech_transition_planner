// src/pages/Roadmap/Roadmap.jsx
import { useEffect, useRef, useState } from "react";
import { FaBookOpen, FaPlus } from "react-icons/fa";

import RoadmapCard from "../../components/roadmap/RoadmapCard/RoadmapCard";
import Timeline from "../../components/roadmap/Timeline/Timeline";
import CourseForm from "../../components/roadmap/CourseForm/CourseForm";
import Modal from "../../components/common/Modal/Modal";

import roadmapData from "../../data/roadmapData";
import { loadCourses, saveCourses } from "../../utils/storage/courseStorage";

import "./Roadmap.css";

const roadmapFilters = {
  all: "all",
  inProgress: "in-progress",
  completed: "completed",
  overdue: "overdue",
};

function isCourseOverdue(course) {
  if (!course.dueDate || course.status === "completed") {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(`${course.dueDate}T00:00:00`);

  return dueDate < today;
}

function Roadmap() {
  const [courses, setCourses] = useState(() => {
    const storedCourses = loadCourses();

    return storedCourses ?? roadmapData;
  });

  const [activeFilter, setActiveFilter] = useState(roadmapFilters.all);

  const [editingCourse, setEditingCourse] = useState(null);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const addFormRef = useRef(null);
  const editFormRef = useRef(null);

  useEffect(() => {
    saveCourses(courses);
  }, [courses]);

  function handleAddCourse(courseData) {
    const newCourse = {
      ...courseData,
      id: crypto.randomUUID(),
    };

    setCourses((currentCourses) => [...currentCourses, newCourse]);
  }

  const filteredCourses = courses.filter((course) => {
    if (activeFilter === roadmapFilters.completed) {
      return course.status === "completed";
    }

    if (activeFilter === roadmapFilters.inProgress) {
      return course.status === "in-progress";
    }

    if (activeFilter === roadmapFilters.overdue) {
      return isCourseOverdue(course);
    }

    return true;
  });

  function handleStartEdit(course) {
    setEditingCourse(course);

    window.setTimeout(() => {
      editFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  const handleConfirmDeleteCourse = () => {
    if (!courseToDelete) {
      return;
    }

    setCourses((currentCourses) =>
      currentCourses.filter((course) => course.id !== courseToDelete.id),
    );

    setEditingCourse((currentEditingCourse) => {
      if (currentEditingCourse?.id === courseToDelete.id) {
        return null;
      }

      return currentEditingCourse;
    });

    setCourseToDelete(null);
  };

  function handleUpdateCourse(updatedCourseData) {
    if (!editingCourse) {
      return;
    }

    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === editingCourse.id
          ? {
              ...course,
              ...updatedCourseData,
              id: course.id,
              timeline: updatedCourseData.timeline ?? course.timeline ?? [],
            }
          : course,
      ),
    );

    setEditingCourse(null);
  }

  function handleCancelEdit() {
    setEditingCourse(null);
  }

  function handleScrollToAddForm() {
    addFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const handleOpenDeleteModal = (course) => {
    setCourseToDelete(course);
  };

  const handleCloseDeleteModal = () => {
    setCourseToDelete(null);
  };

  const coursesInProgress = courses.filter(
    (course) =>
      course.status === "in-progress" || course.status === "Em andamento",
  ).length;

  const totalPlannedHours = courses.reduce(
    (total, course) => total + (Number(course.hours) || 0),
    0,
  );

  const timelineCourse = courses[0] ?? null;

  return (
    <main className="roadmap-page">
      <header className="roadmap-page__header">
        <div className="roadmap-page__title-group">
          <span className="roadmap-page__eyebrow">Study planning</span>

          <h1 className="roadmap-page__title">Study Roadmap</h1>

          <p className="roadmap-page__description">
            Organize courses, track course progress, and view the next steps of
            your learning journey.
          </p>
        </div>

        <button
          className="roadmap-page__add-button"
          type="button"
          onClick={handleScrollToAddForm}
        >
          <FaPlus aria-hidden="true" />
          New Course
        </button>
      </header>

      <section className="roadmap-page__summary" aria-label="Roadmap summary">
        <article className="roadmap-page__summary-card">
          <span className="roadmap-page__summary-icon">
            <FaBookOpen aria-hidden="true" />
          </span>

          <div>
            <strong className="roadmap-page__summary-value">
              {courses.length}
            </strong>
            <p className="roadmap-page__summary-label">Registered courses</p>
          </div>
        </article>

        <article className="roadmap-page__summary-card">
          <div>
            <strong className="roadmap-page__summary-value">
              {coursesInProgress}
            </strong>
            <p className="roadmap-page__summary-label">Courses in progress</p>
          </div>
        </article>

        <article className="roadmap-page__summary-card">
          <div>
            <strong className="roadmap-page__summary-value">
              {totalPlannedHours} h
            </strong>
            <p className="roadmap-page__summary-label">Planned workload</p>
          </div>
        </article>
      </section>

      <section className="roadmap-page__form-section" ref={addFormRef}>
        <div>
          <h2 className="roadmap-page__section-title">Create Course</h2>

          <p className="roadmap-page__section-description">
            Fill in the course's key details.
          </p>
        </div>

        <CourseForm onSubmit={handleAddCourse} />
      </section>

      <section
        className="roadmap-page__content"
        aria-labelledby="roadmap-courses-title"
      >
        <div className="roadmap-page__section-header">
          <div>
            <h2
              className="roadmap-page__section-title"
              id="roadmap-courses-title"
            >
              My courses
            </h2>

            <p className="roadmap-page__section-description">
              Track the courses added to your development plan.
            </p>
          </div>
        </div>

        <div className="roadmap__filters">
          <button
            className={`roadmap__filter-button ${
              activeFilter === roadmapFilters.all
                ? "roadmap__filter-button_active"
                : ""
            }`}
            type="button"
            onClick={() => setActiveFilter(roadmapFilters.all)}
            aria-pressed={activeFilter === roadmapFilters.all}
          >
            All
          </button>

          <button
            className={`roadmap__filter-button ${
              activeFilter === roadmapFilters.completed
                ? "roadmap__filter-button_active"
                : ""
            }`}
            type="button"
            onClick={() => setActiveFilter(roadmapFilters.completed)}
            aria-pressed={activeFilter === roadmapFilters.completed}
          >
            Completed
          </button>

          <button
            className={`roadmap__filter-button ${
              activeFilter === roadmapFilters.inProgress
                ? "roadmap__filter-button_active"
                : ""
            }`}
            type="button"
            onClick={() => setActiveFilter(roadmapFilters.inProgress)}
            aria-pressed={activeFilter === roadmapFilters.inProgress}
          >
            In progress
          </button>

          <button
            className={`roadmap__filter-button ${
              activeFilter === roadmapFilters.overdue
                ? "roadmap__filter-button_active"
                : ""
            }`}
            type="button"
            onClick={() => setActiveFilter(roadmapFilters.overdue)}
            aria-pressed={activeFilter === roadmapFilters.overdue}
          >
            Late
          </button>
        </div>

        <div className="roadmap-page__cards">
          {filteredCourses.map((course) => (
            <RoadmapCard
              key={course.id}
              {...course}
              onEdit={() => handleStartEdit(course)}
              onDelete={() => handleOpenDeleteModal(course)}
            />
          ))}
        </div>

        {editingCourse && (
          <section className="roadmap-page__form-section" ref={editFormRef}>
            <div>
              <h2 className="roadmap-page__section-title">Edit course</h2>

              <p className="roadmap-page__section-description">
                Update the data for {editingCourse.title}.
              </p>
            </div>

            <CourseForm
              initialData={editingCourse}
              onSubmit={handleUpdateCourse}
              onCancel={handleCancelEdit}
              submitLabel="Save"
              resetAfterSubmit={false}
            />
          </section>
        )}

        {timelineCourse ? (
          <Timeline
            title={`Course stages — ${timelineCourse.title}`}
            items={timelineCourse.timeline ?? []}
          />
        ) : (
          <div className="roadmap__empty-timeline">
            <h2 className="roadmap__empty-timeline-title">Course stages</h2>

            <p className="roadmap__empty-timeline-text">
              Add a course to view its timeline.
            </p>
          </div>
        )}
      </section>

      <Modal
        isOpen={Boolean(courseToDelete)}
        title="Delete course"
        confirmLabel="Delete"
        cancelLabel="Cancel"
        confirmVariant="danger"
        onConfirm={handleConfirmDeleteCourse}
        onClose={handleCloseDeleteModal}
      >
        <p>
          Are you sure you want to delete{" "}
          <strong>{courseToDelete?.title}</strong>?
        </p>

        <p>This action cannot be undone.</p>
      </Modal>
    </main>
  );
}

export default Roadmap;
