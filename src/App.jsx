// src/APP.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import "./App.css";

// Componentes de exemplo
function Dashboard() {
  return <h1 className="text-2xl font-bold">Painel Principal</h1>;
}

function Configurar() {
  return <h1 className="text-2xl font-bold">Configurações do Sistema</h1>;
}

function App() {
  return (
    <Routes>
      {/* Rota pai que carrega o layout estrutural */}
      <Route path="/" element={<MainLayout />}>
        {/* Rotas filhas */}
        <index element={<Dashboard />} /> {/* Rota padrão (/) */}
        <Route path="configurar" element={<Configurar />} />{" "}
        {/* Rota (/configurar) */}
      </Route>
    </Routes>
  );
}

export default App;
