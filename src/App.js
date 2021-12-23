import React, { lazy, useEffect } from "react";
import "./styles/app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Tasks from "./pages/Dashboard/Client/Tasks/Tasks";
import ClientComplaint from "./pages/Dashboard/Client/Complaint/Complaint";
import ClientSettings from "./pages/Dashboard/Client/Settings/Settings";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const SuperUser = lazy(() => import("./pages/Dashboard/Superuser/Dashboard"));
const Projects = lazy(() => import("./pages/Dashboard/Superuser/Projects"));
const ClientDashboard = lazy(() =>
  import("./pages/Dashboard/Client/Dashboard")
);
function App() {
  const topBarVisible = useSelector((state) => state.stonehive.topBarVisible);

  return (
    <div className="App">
      <Sidebar />
      <div className="main_panel">
        <Suspense fallback={""}>
          {topBarVisible ? <Topbar /> : ""}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="super-user" element={<SuperUser />} />
            <Route path="super-user/projects" element={<Projects />} />
            <Route path="/client/dashboard" element={<ClientDashboard />} />
            <Route path="/client/task" element={<Tasks />} />
            <Route path="/client/complaint" element={<ClientComplaint />} />
            <Route path="/client/settings" element={<ClientSettings />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
export default App;
