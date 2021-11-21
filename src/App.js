import "./styles/app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SuperUser } from "./pages/Dashboard/Superuser";
import { ClientDashboard } from "./pages/Dashboard/Client";

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
      name: "activities",
      link: "/activities",
      icon: "fluent:timeline-20-filled",
    },
    {
      name: "activities",
      link: "/activities",
      icon: "fluent:timeline-20-filled",
    },
  ];
  return (
    <div className="App">
      <Sidebar items={items} />
      <Routes>
        <Route path="/super-user" element={<SuperUser />} />
        <Route path="/client" element={<ClientDashboard />} />
      </Routes>
    </div>
  );
}
export default App;
