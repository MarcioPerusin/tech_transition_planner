// src/components/Sidebar/Sidebar.jsx
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

function Sidebar() {
  return (
    <aside className="hidden md:block md:w-48 lg:w-64 h-screen bg-slate-900 text-white">
      <div className="p-6">
        <Logo />
      </div>

      <nav className="flex flex-col mt-8">
        <NavLink to="/" className="px-6 py-3 hover:bg-slate-700">
          Dashboard
        </NavLink>

        <NavLink to="/roadmap" className="px-6 py-3 hover:bg-slate-700">
          Roadmap
        </NavLink>

        <NavLink to="/projects" className="px-6 py-3 hover:bg-slate-700">
          Projects
        </NavLink>

        <NavLink to="/skills" className="px-6 py-3 hover:bg-slate-700">
          Skills
        </NavLink>

        <NavLink to="/goals" className="px-6 py-3 hover:bg-slate-700">
          Goals
        </NavLink>

        <NavLink to="/pipeline" className="px-6 py-3 hover:bg-slate-700">
          Pipeline
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
