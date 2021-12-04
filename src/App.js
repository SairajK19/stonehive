import React, { lazy } from "react";
import "./styles/app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const SuperUser = lazy(() => import("./pages/Dashboard/Superuser/Dashboard"));
const Projects = lazy(() => import("./pages/Dashboard/Superuser/Projects"));
const ClientDashboard = lazy(() =>
  import("./pages/Dashboard/Client/Dashboard")
);

function App() {
  const sidebar_items = useSelector((state) => state.stonehive.sidebarItems);
  return (
    <div className="App">
      <Sidebar items={sidebar_items} />
      <div className="main_panel">
        <Topbar />
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="super-user" element={<SuperUser />} />
            <Route path="super-user/projects" element={<Projects />} />
            <Route path="/client" element={<ClientDashboard />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
export default App;
