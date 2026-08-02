// src/components/roadmap/CourseForm/CourseForm.jsx
import { useId, useState } from "react";

import {
  validateCourseTitle,
  validateInstitution,
  validateCourseHours,
  validateCourseProgress,
  validateCourseDueDate,
  validateCourse,
  hasValidationErrors,
} from "../../../utils/validation/courseValidation";

import "./CourseForm.css";

const defaultFormData = {
  title: "",
  institution: "",
  hours: "",
  progress: 0,
  status: "pending",
  dueDate: "",
  color: "#2563eb",
  timeline: [],
};

const defaultErrors = {
  title: "",
  institution: "",
  hours: "",
  progress: "",
  dueDate: "",
};

function createFormData(initialData) {
  return {
    ...defaultFormData,
    ...initialData,
  };
}

function CourseForm({
  onSubmit,
  onCancel,
  initialData,
  submitLabel = "Adicionar curso",
  resetAfterSubmit = true,
}) {
  const [formData, setFormData] = useState(() => createFormData(initialData));
  const [errors, setErrors] = useState(defaultErrors);

  const formId = useId();

  const titleId = `${formId}-course-title`;
  const institutionId = `${formId}-course-institution`;
  const hoursId = `${formId}-course-hours`;
  const progressId = `${formId}-course-progress`;
  const statusId = `${formId}-course-status`;
  const dueDateId = `${formId}-course-due-date`;
  const colorId = `${formId}-course-color`;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: "",
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateCourse(formData);

    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) {
      return;
    }

    const normalizedCourse = {
      ...formData,
      title: formData.title.trim(),
      institution: formData.institution.trim(),
      hours: Number(formData.hours),
      progress: Number(formData.progress),
      timeline: formData.timeline || [],
    };

    onSubmit?.(normalizedCourse);

    if (resetAfterSubmit) {
      setFormData(createFormData());
      setErrors(defaultErrors);
    }
  }

  function handleTitleBlur() {
    setErrors((currentErrors) => ({
      ...currentErrors,
      title: validateCourseTitle(formData.title),
    }));
  }

  function handleInstitutionBlur() {
    setErrors((currentErrors) => ({
      ...currentErrors,
      institution: validateInstitution(formData.institution),
    }));
  }

  function handleHoursBlur() {
    setErrors((currentErrors) => ({
      ...currentErrors,
      hours: validateCourseHours(formData.hours),
    }));
  }

  function handleProgressBlur() {
    setErrors((currentErrors) => ({
      ...currentErrors,
      progress: validateCourseProgress(formData.progress),
    }));
  }

  function handleDueDateBlur() {
    setErrors((currentErrors) => ({
      ...currentErrors,
      dueDate: validateCourseDueDate(formData.dueDate),
    }));
  }

  return (
    <form className="course-form" onSubmit={handleSubmit} noValidate>
      <div className="course-form__field">
        <label className="course-form__label" htmlFor={titleId}>
          Course title
        </label>

        <input
          className={`course-form__input ${
            errors.title ? "course-form__input_error" : ""
          }`}
          id={titleId}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          onBlur={handleTitleBlur}
          placeholder="Ex.: Web Development Full Stack"
          required
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? `${titleId}-error` : undefined}
        />

        {errors.title && (
          <span
            className="course-form__error"
            id={`${titleId}-error`}
            role="alert"
          >
            {errors.title}
          </span>
        )}
      </div>

      <div className="course-form__field">
        <label className="course-form__label" htmlFor={institutionId}>
          Institution
        </label>

        <input
          className={`course-form__input ${
            errors.institution ? "course-form__input_error" : ""
          }`}
          id={institutionId}
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          onBlur={handleInstitutionBlur}
          placeholder="Ex.: TripleTen"
          required
          aria-invalid={Boolean(errors.institution)}
          aria-describedby={
            errors.institution ? `${institutionId}-error` : undefined
          }
        />

        {errors.institution && (
          <span
            className="course-form__error"
            id={`${institutionId}-error`}
            role="alert"
          >
            {errors.institution}
          </span>
        )}
      </div>

      <div className="course-form__grid">
        <div className="course-form__field">
          <label className="course-form__label" htmlFor={hoursId}>
            Course hours
          </label>

          <input
            className={`course-form__input ${
              errors.hours ? "course-form__input_error" : ""
            }`}
            id={hoursId}
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            onBlur={handleHoursBlur}
            placeholder="480"
            min="1"
            required
            aria-invalid={Boolean(errors.hours)}
            aria-describedby={errors.hours ? `${hoursId}-error` : undefined}
          />

          {errors.hours && (
            <span
              className="course-form__error"
              id={`${hoursId}-error`}
              role="alert"
            >
              {errors.hours}
            </span>
          )}
        </div>

        <div className="course-form__field">
          <label className="course-form__label" htmlFor={progressId}>
            Progress
          </label>

          <input
            className={`course-form__input ${
              errors.progress ? "course-form__input_error" : ""
            }`}
            id={progressId}
            type="number"
            name="progress"
            value={formData.progress}
            onChange={handleChange}
            onBlur={handleProgressBlur}
            min="0"
            max="100"
            aria-invalid={Boolean(errors.progress)}
            aria-describedby={
              errors.progress ? `${progressId}-error` : undefined
            }
          />

          {errors.progress && (
            <span
              className="course-form__error"
              id={`${progressId}-error`}
              role="alert"
            >
              {errors.progress}
            </span>
          )}
        </div>
      </div>

      <div className="course-form__grid">
        <div className="course-form__field">
          <label className="course-form__label" htmlFor={statusId}>
            Status
          </label>

          <select
            className="course-form__select"
            id={statusId}
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Não iniciado</option>
            <option value="in-progress">Em andamento</option>
            <option value="completed">Concluído</option>
            <option value="delayed">Atrasado</option>
            <option value="paused">Pausado</option>
          </select>
        </div>

        <div className="course-form__field">
          <label className="course-form__label" htmlFor={dueDateId}>
            Due date
          </label>

          <input
            className={`course-form__input ${
              errors.dueDate ? "course-form__input_error" : ""
            }`}
            id={dueDateId}
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            onBlur={handleDueDateBlur}
            aria-invalid={Boolean(errors.dueDate)}
            aria-describedby={errors.dueDate ? `${dueDateId}-error` : undefined}
          />

          {errors.dueDate && (
            <span
              className="course-form__error"
              id={`${dueDateId}-error`}
              role="alert"
            >
              {errors.dueDate}
            </span>
          )}
        </div>
      </div>

      <div className="course-form__field">
        <label className="course-form__label" htmlFor={colorId}>
          Course color
        </label>

        <div className="course-form__color-field">
          <input
            className="course-form__color-input"
            id={colorId}
            name="color"
            type="color"
            value={formData.color}
            onChange={handleChange}
          />

          <span className="course-form__color-value">{formData.color}</span>
        </div>
      </div>

      <div className="course-form__actions">
        {onCancel && (
          <button
            className="course-form__cancel"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>
        )}

        <button className="course-form__submit" type="submit">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export default CourseForm;
