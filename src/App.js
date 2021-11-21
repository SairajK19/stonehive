import "./styles/app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
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
    },
  ];

  return (
    <div className="App">
      <Sidebar items={items} />
    </div>
  );
}
export default App;
