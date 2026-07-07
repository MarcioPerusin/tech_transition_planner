import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white">

      <div className="p-6">
        <Logo />
      </div>

      <nav className="flex flex-col mt-8">

        <NavLink
          to="/"
          className="px-6 py-3 hover:bg-slate-700"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/roadmap"
          className="px-6 py-3 hover:bg-slate-700"
        >
          Roadmap
        </NavLink>

        <NavLink
          to="/projetos"
          className="px-6 py-3 hover:bg-slate-700"
        >
          Projetos
        </NavLink>

        <NavLink
          to="/competencias"
          className="px-6 py-3 hover:bg-slate-700"
        >
          Competências
        </NavLink>

        <NavLink
          to="/metas"
          className="px-6 py-3 hover:bg-slate-700"
        >
          Metas
        </NavLink>

        <NavLink
          to="/funil"
          className="px-6 py-3 hover:bg-slate-700"
        >
          Funil
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;
