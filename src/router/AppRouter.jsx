// src/router/AppRouter.jsx
import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Roadmap from "../pages/Roadmap/Roadmap";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Goals from "../pages/Goals/Goals";
import Pipeline from "../pages/Pipeline/Pipeline";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/roadmap" element={<Roadmap />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/goals" element={<Goals />} />

      <Route path="/pipeline" element={<Pipeline />} />

      {/* Redirects non-existent routes to the Dashboard. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
