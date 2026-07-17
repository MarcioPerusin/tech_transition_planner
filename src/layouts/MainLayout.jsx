// src/layout/MainLayout.jsx
import Sidebar from "../../src/components/common/Sidebar/Sidebar";
import Header from "../../src/components/common/Header/Header";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
