import React, { useEffect, useState } from "react";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

//components
import PopupLarge from "../../../../components/PopupLarge/PopupLarge";
import BudgetOverviewPannel from "../../../../components/Dashboard/Budget/BudgetOverviewPanel/BudgetOverviewPannel";
import UpdatesOverviewPanel from "../../../../components/Dashboard/UpdatesOverviewPanel/UpdatesOverviewPanel";
import PlanElevationPanel from "../../../../components/Dashboard/PlanElevationPanel/PlanElevationPanel";
import BudgetSection from "../../../../components/BudgetSection/Budget";
import Updates from "../../../../components/Dashboard/Updates/Updates";

//pages
import Activities from "../Activities/Activities";
import SiteImages from "../SiteImages/Siteimages";
import PlanElevation from "../PlansElevation/PlanElevation";

//styles
import styles from "./client_dashboard.module.scss";
import "../../../../styles/dashboard.scss";

//assets
import CurrentPhaseImg from "../../../../assets/images/current_phase.png";
import SVGCard from "../../../../components/SVGcards/SVGCard";
import SiteMainImg from "../../../../assets/images/siteImg_1.png";
import SiteSmallImg1 from "../../../../assets/images/siteImg_2.png";
import SiteSmallImg2 from "../../../../assets/images/siteImg_3.png";

export default function ClientDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "dashboard", items: clientSidebarItems })
    );
    dispatch(setTopBarVisibility({ visibility: true }));
  });
  const [popupToggle, setPopupToggle] = useState(false);
  const [popupComponent, setPopupComponent] = useState("activities");
  const [popupTitle, setPopupTitle] = useState("activities");
  return (
    <div className={`${styles.container} responsive_font dash_grid_layout`}>
      <div
        onClick={() => {
          setPopupTitle("Activities");
          setPopupComponent("activities");
          setPopupToggle(true);
        }}
      >
        <OverviewPanel />
      </div>

      <div
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
          setPopupTitle("Total Budget Overview");
          setPopupComponent("budget");
          setPopupToggle(true);
        }}
      >
        <BudgetOverviewPannel />
      </div>

      <div
        onClick={() => {
          setPopupTitle("Plans And Elevations");
          setPopupComponent("planelevation");
          setPopupToggle(true);
        }}
      >
        <PlanElevationPanel />
      </div>

      <div
        onClick={() => {
          setPopupTitle("Site Images");
          setPopupComponent("siteimages");
          setPopupToggle(true);
        }}
      >
        <SiteImagesPanel />
      </div>
      <button
         onClick={() => {
          setPopupTitle("Updates");
          setPopupComponent("updates");
          setPopupToggle(true);
        }}
        id="update_button"
      >
        <Icon icon="ic:outline-tips-and-updates" height="20" />
      </button>
      <PopupLarge
        popupToggle={popupToggle}
        setPopupToggle={(data) => setPopupToggle(data)}
        popupTitle={popupTitle}
      >
        {(() => {
          switch (popupComponent) {
            case "activities":
              return <Activities fromPopup={true} />;
            case "siteimages":
              return <SiteImages fromPopup={true} />;
            case "planelevation":
              return <PlanElevation fromPopup={true} />;
            case "budget":
              return <BudgetSection fromPopup={true} />;
            case "updates":
              return <Updates />;
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
    <div className={`${styles.overview} dash_panel`}>
      <div className={styles.current_phase}>
        <img src={CurrentPhaseImg} alt="" />
      </div>
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
    </div>
  );
}

function SiteImagesPanel() {
  return (
    <div className={`${styles.site_images} dash_panel`}>
      <h2 id="panel_title">Site Images</h2>
      <div className={styles.site_images_main}>
        <div className={styles.main_thumbnail}>
          <img src={SiteMainImg} alt="" />
        </div>
        <div className={styles.small_thumbnail}>
          <img src={SiteSmallImg1} alt="" />
        </div>
        <div className={styles.small_thumbnail}>
          <img src={SiteSmallImg2} alt="" />
        </div>
        <button>
          <Icon icon="akar-icons:arrow-right" height="35" />
        </button>
      </div>
    </div>
  );
}
