// src/router/AppRouter.jsx
import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Roadmap from "../pages/Roadmap/Roadmap";
import Projetos from "../pages/Projetos/Projetos";
import Competencias from "../pages/Competencias/Competencias";
import Metas from "../pages/Metas/Metas";
import Funil from "../pages/Funil/Funil";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/roadmap" element={<Roadmap />} />

      <Route path="/projetos" element={<Projetos />} />

      <Route path="/competencias" element={<Competencias />} />

      <Route path="/metas" element={<Metas />} />

      <Route path="/funil" element={<Funil />} />

      {/* Redirects non-existent routes to the Dashboard. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
