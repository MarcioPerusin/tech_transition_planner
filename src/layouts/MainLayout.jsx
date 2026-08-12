// src/layout/MainLayout.jsx
import Sidebar from "../../src/components/common/Sidebar/Sidebar";
import Header from "../../src/components/common/Header/Header";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Header />

        <main className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
