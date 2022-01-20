import React, { lazy } from "react";
import "./styles/app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import Deadlines from "./pages/Dashboard/Superuser/projects/Deadlines";

// Client Dashboard
import ClientDashboard from "./pages/Dashboard/Client/Dashboard/ClientDashboard";
import ClientDashActivities from "./pages/Dashboard/Client/Activities/Activities";
import ClientDashComplaint from "./pages/Dashboard/Client/Complaint/Complaint";
import ClientDashSiteImages from "./pages/Dashboard/Client/SiteImages/Siteimages";
import Settings from "./components/Settings/Settings";
import ClientDashBudget from "./pages/Dashboard/Client/Budget/Budget";
import ClientDashPlanElevations from "./pages/Dashboard/Client/PlansElevation/PlanElevation";
// Constractor Dashboard
import ContractorDashboard from "./pages/Dashboard/Contractor/Dashboard/ContractorDash";
import ContractorDashBills from "./pages/Dashboard/Contractor/Bills/Bills";
import ContractorDashComplaint from "./pages/Dashboard/Contractor/Complaint/Complaint";
import ContractorDashTasks from "./pages/Dashboard/Contractor/Tasks/Tasks";
import ContractorDashBudget from "./pages/Dashboard/Contractor/Budget/Budget";
import ContractorDashPlanElevations from "./pages/Dashboard/Contractor/PlanElevation/PlanElevation";

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
const SuperUserDashboard = lazy(() =>
  import("./pages/Dashboard/Superuser/dashboard/Dashboard/SuperUserDashboard")
);
const SuperUserComplaints = lazy(() =>
  import("./pages/Dashboard/Superuser/dashboard/Complaints/SuperUserComplaints")
);
const SuperUserBills = lazy(() =>
  import("./pages/Dashboard/Superuser/dashboard/Bills/SuperUserBills")
);
const SuperUserArchitect = lazy(() =>
  import("./pages/Dashboard/Superuser/dashboard/Architect/SuperUserArchitect")
);
const ProjectCreated = lazy(() =>
  import("./pages/Dashboard/Superuser/create_project/ProjectCreated")
);

function App() {
  const topBarVisible = useSelector((state) => state.stonehive.topBarVisible);

  return (
    <div className="App">
      <Sidebar />
      <div className="main_panel">
        <Suspense fallback={""}>
          {topBarVisible ? <Topbar /> : ""}
          <div className="main_panel_components">
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
              <Route
                path="super-user/dashboard/project"
                element={<SuperUserDashboard />}
              />
              <Route
                path="super-user/dashboard/complaints"
                element={<SuperUserComplaints />}
              />
              <Route
                path="super-user/dashboard/bills"
                element={<SuperUserBills />}
              />
              <Route
                path="super-user/dashboard/architect"
                element={<SuperUserArchitect />}
              />
              <Route
                path="super-user/project-created"
                element={<ProjectCreated />}
              />
              {/* Client Dahsboard */}
              <Route path="/client/dashboard" element={<ClientDashboard />} />
              <Route
                path="/client/actvities"
                element={<ClientDashActivities />}
              />
              <Route
                path="/client/site-images"
                element={<ClientDashSiteImages />}
              />
              <Route
                path="/client/complaint"
                element={<ClientDashComplaint />}
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/client/Budget" element={<ClientDashBudget />} />
              <Route
                path="/client/plan-elevation"
                element={<ClientDashPlanElevations />}
              />
              {/* Constractor Dashboard */}
              <Route
                path="/contractor/dashboard"
                element={<ContractorDashboard />}
              />{" "}
              <Route
                path="/contractor/bills"
                element={<ContractorDashBills />}
              />{" "}
              <Route
                path="/contractor/complaint"
                element={<ContractorDashComplaint />}
              />
              <Route
                path="/contractor/tasks"
                element={<ContractorDashTasks />}
              />
              <Route
                path="/contractor/budget"
                element={<ContractorDashBudget />}
              />
              <Route
                path="/contractor/plan-elevation"
                element={<ContractorDashPlanElevations />}
              />
            </Routes>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
