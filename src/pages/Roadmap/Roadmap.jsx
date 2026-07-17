// src/pages/Roadmap/Roadmap.jsx
import { FaBookOpen, FaPlus } from "react-icons/fa";
import RoadmapCard from "../../components/roadmap/RoadmapCard/RoadmapCard";
import Timeline from "../../components/roadmap/Timeline/Timeline";
import roadmapData from "../../data/roadmapData";

import "./Roadmap.css";

function Roadmap() {
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

        <button className="roadmap-page__add-button" type="button">
          <FaPlus aria-hidden="true" />
          New course
        </button>
      </header>

      <section className="roadmap-page__summary" aria-label="Roadmap summary">
        <article className="roadmap-page__summary-card">
          <span className="roadmap-page__summary-icon">
            <FaBookOpen aria-hidden="true" />
          </span>

          <div>
            <strong className="roadmap-page__summary-value">4</strong>
            <p className="roadmap-page__summary-label">Registered courses</p>
          </div>
        </article>

        <article className="roadmap-page__summary-card">
          <div>
            <strong className="roadmap-page__summary-value">2</strong>
            <p className="roadmap-page__summary-label">Courses in progress</p>
          </div>
        </article>

        <article className="roadmap-page__summary-card">
          <div>
            <strong className="roadmap-page__summary-value">120 h</strong>
            <p className="roadmap-page__summary-label">Planned workload</p>
          </div>
        </article>
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

        <div className="roadmap-page__cards">
          {roadmapData.map((course) => (
            <RoadmapCard key={course.id} {...course} />
          ))}
        </div>

        <Timeline
          title={`Etapas — ${roadmapData[0].title}`}
          items={roadmapData[0].timeline}
        />
      </section>
    </main>
  );
}

export default Roadmap;
