import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { contractorSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";
import UpdatesOverviewPanel from "../../../../components/Dashboard/UpdatesOverviewPanel/UpdatesOverviewPanel";
import BudgetOverviewPanel from "../../../../components/Dashboard/Budget/BudgetOverviewPanel/BudgetOverviewPannel";
import PlanElevationPanel from "../../../../components/Dashboard/PlanElevationPanel/PlanElevationPanel";
import ActivityTaskTable from "../../../../components/ActivityTaskTable/ActivityTaskTable";
import GanttChart from "../../../../components/Charts/GanttChart/GanttChart";
import Updates from "../../../../components/Dashboard/Updates/Updates";
import SVGCard from "../../../../components/SVGcards/SVGCard";
import BudgetSection from "../../../../components/BudgetSection/Budget";
import PlanElevation from "../PlanElevation/PlanElevation";
import PopupLarge from "../../../../components/PopupLarge/PopupLarge";
import styles from "./constractor_dash.module.scss";
import "../../../../styles/dashboard.scss";
import Tasks from "../Tasks/Tasks";
export default function ContractorDash() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "dashboard", items: contractorSidebarItems })
    );
  });
  const [popupToggle, setPopupToggle] = useState(false);
  const [popupComponent, setPopupComponent] = useState("activities");
  const [popupTitle, setPopupTitle] = useState("activities");
  return (
    <div className={`${styles.container} responsive_font dash_grid_layout `}>
      <div
        onClick={() => {
          setPopupTitle("Tasks Overview");
          setPopupComponent("overview");
          setPopupToggle(true);
        }}
      >
        <OverviewPanel />
      </div>
      <div
        className={styles.updates}
        onClick={() => {
          setPopupTitle("Updates");
          setPopupComponent("updates");
          setPopupToggle(true);
        }}
      >
        <UpdatesOverviewPanel />
      </div>
      <div
        onClick={() => {
          setPopupTitle("Gantt Chart");
          setPopupComponent("ganttchart");
          setPopupToggle(true);
        }}
      >
        <GChart />
      </div>
      <div
        className={styles.plan_elevations}
        onClick={() => {
          setPopupTitle("Plans and Elevations");
          setPopupComponent("planelevation");
          setPopupToggle(true);
        }}
      >
        <PlanElevationPanel />
      </div>
      <div
        className={styles.bugdet_overview}
        onClick={() => {
          setPopupTitle("Budget Overview");
          setPopupComponent("budget");
          setPopupToggle(true);
        }}
      >
        <BudgetOverviewPanel />
      </div>
      <PopupLarge
        popupToggle={popupToggle}
        // popupToggle={true}
        setPopupToggle={(data) => setPopupToggle(data)}
        popupTitle={popupTitle}
      >
        {(() => {
          switch (popupComponent) {
            case "overview":
              return <Tasks fromPopup={true} />;
            case "ganttchart":
              return <GanttChart />;
            case "budget":
              return <BudgetSection fromPopup={true} />;
            case "updates":
              return <Updates />;
            case "planelevation":
              return <PlanElevation />;
            default:
              break;
          }
        })()}
      </PopupLarge>
    </div>
  );
}

function OverviewPanel() {
  return (
    <div className={`${styles.overview} dash_panel dash_panel_flex`}>
      <SVGCard bgcolor={"#F44771"} innerRect={"#FF7193"}>
        <div className="overview_card_content">
          <h3>60%</h3>
          <p>Work Completion</p>
        </div>
      </SVGCard>
      <SVGCard bgcolor={"#FF8836"} innerRect={"#FFAB72"}>
        <div className="overview_card_content">
          <h3>Phase 2</h3>
          <p>Current Phase</p>
        </div>
      </SVGCard>
      <SVGCard bgcolor={"#7DC2AD"} innerRect={"#97CABB"}>
        <div className="overview_card_content">
          <h3>Foundation</h3>
          <p>Upcoming Activity</p>
        </div>
      </SVGCard>
      <div className={styles.tasks_table}>
        <ActivityTaskTable contractorDash={true} />
      </div>
    </div>
  );
}

function GChart() {
  return (
    <div className={`${styles.gantt_chart} dash_panel dash_panel_flex`}>
      <p id="panel_title">Gantt Chart</p>
      <GanttChart />
    </div>
  );
}
