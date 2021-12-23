import React, { lazy } from "react";
import "./styles/app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Tasks from "./pages/Dashboard/Client/Tasks/Tasks";
import { useSelector } from "react-redux";
import Deadlines from "./pages/Dashboard/Superuser/projects/Deadlines";

const Home = lazy(() => import("./pages/Home/Home"));
const SuperUser = lazy(() => import("./pages/Dashboard/Superuser/Dashboard"));
const Projects = lazy(() =>
  import("./pages/Dashboard/Superuser/projects/Projects")
);
const Inquiries = lazy(() =>
  import("./pages/Dashboard/Superuser/inquiries/Inquiries")
);
const CreateProject = lazy(() =>
  import("./pages/Dashboard/Superuser/create_project/CreateProject")
);
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
            <Route path="super-user/deadlines" element={<Deadlines />} />
            <Route path="super-user/inquiries" element={<Inquiries />} />
            <Route
              path="super-user/create-project"
              element={<CreateProject />}
            />
            <Route path="/client" element={<ClientDashboard />} />
            <Route path="/client/dashboard" element={<ClientDashboard />} />
            <Route path="/client/task" element={<Tasks />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
export default App;
