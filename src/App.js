import React, { lazy } from "react";
import "./styles/app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const SuperUser = lazy(() => import("./pages/Dashboard/Superuser/Dashboard"));
const Projects = lazy(() => import("./pages/Dashboard/Superuser/Projects"));
const ClientDashboard = lazy(() =>
  import("./pages/Dashboard/Client/Dashboard")
);

function App() {
  let items = [
    {
      name: "dashboard",
      link: "/dashboard",
      icon: "bx:bxs-dashboard",
    },
    {
      name: "activities",
      link: "/activities",
      icon: "fluent:timeline-20-filled",
    },
    {
      name: "budget",
      link: "/budget",
      icon: "ic:baseline-analytics",
    },{
      name: "budget",
      link: "/budget1",
      icon: "ic:baseline-analytics",
    }
  ];

  return (
    <div className="App">
      <Sidebar items={items} />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="super-user" element={<SuperUser />} />
          <Route path="super-user/projects" element={<Projects />} />
          <Route path="/client" element={<ClientDashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
