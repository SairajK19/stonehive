import React, { useEffect, useState } from "react";
import { clientSidebarItems } from "../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

import BudgetChart from "../../../components/BudgetChart/BudgetChart";

import Popup from "./Popup/Popup";
import Activities from "./Activities/Activities";
import Updates from "./Updates/Updates";
import SiteImages from "./SiteImages/Siteimages";
import BudgetSection from "../../../components/BudgetSection/Budget";
import styles from "./client.module.scss";

import CurrentPhaseImg from "../../../assets/images/current_phase.png";
import SVGCard from "../../../components/SVGcards/SVGCard";
import PlanElevationImg from "../../../assets/images/plan_elevations.png";
import SiteMainImg from "../../../assets/images/siteImg_1.png";
import SiteSmallImg1 from "../../../assets/images/siteImg_2.png";
import SiteSmallImg2 from "../../../assets/images/siteImg_3.png";

export default function ClientDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "dashboard", items: clientSidebarItems })
    );
  });
  const [popupToggle, setPopupToggle] = useState(false);
  const [popupComponent, setPopupComponent] = useState("activities");
  const [popupTitle, setPopupTitle] = useState("activities");
  return (
    <div className={`${styles.container} responsive_font`}>
      <div
        className={styles.overview}
        onClick={() => {
          setPopupTitle("Activities");
          setPopupComponent("activities");
          setPopupToggle(true);
        }}
      >
        <div className={styles.current_phase}>
          <img src={CurrentPhaseImg} alt="" />
        </div>
        <SVGCard bgcolor={"#F44771"} innerRect={"#FF7193"}>
          <div className={styles.overview_content}>
            <h3>60%</h3>
            <p>Work Completion</p>
          </div>
        </SVGCard>
        <SVGCard bgcolor={"#FF8836"} innerRect={"#FFAB72"}>
          <div className={styles.overview_content}>
            <h3>Phase 2</h3>
            <p>Current Phase</p>
          </div>
        </SVGCard>
        <SVGCard bgcolor={"#7DC2AD"} innerRect={"#97CABB"}>
          <div className={styles.overview_content}>
            <h3>Foundation</h3>
            <p>Upcoming Activity</p>
          </div>
        </SVGCard>
      </div>
      <div className={styles.updates}>
        <h2>Updates</h2>
        <div className={styles.update_filter}>
          <p>September 2021</p>
          <Icon icon="akar-icons:arrow-up-down" height="15" />
        </div>
        <div className={styles.update_list}>
          {[1, 2, 3].map(() => {
            return (
              <div className={styles.update_list_item}>
                <div
                  className={styles.update_svg}
                  style={{ backgroundColor: "rgba(255, 136, 54,0.2)" }}
                >
                  <Icon
                    icon="clarity:design-line"
                    style={{ color: "rgba(255, 136, 54,1)" }}
                  />
                </div>
                <div className={styles.update_list_item_info}>
                  <p id={styles.update_list_info_head}>Design Completed</p>
                  <p id={styles.update_list_info_date}>20 jun 2021</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.update_view_all}>
          <button
            onClick={() => {
              setPopupTitle("Updates");
              setPopupComponent("updates");
              setPopupToggle(true);
            }}
          >
            View All
          </button>
        </div>
      </div>
      <div
        className={styles.budget_overview}
        onClick={() => {
          setPopupTitle("Total Budget Overview");
          setPopupComponent("budget");
          setPopupToggle(true);
        }}
      >
        <h2>Total Budget Overview</h2>
        <div className={styles.budget_chart}>
          <BudgetChart />
        </div>
      </div>
      <div className={styles.plan_elevation}>
        <h2>Plans and Elevation</h2>
        <img src={PlanElevationImg} alt="plans and elevations" />
      </div>
      <div
        className={styles.site_images}
        onClick={() => {
          setPopupTitle("Site Images");
          setPopupComponent("siteimages");
          setPopupToggle(true);
        }}
      >
        <h2>Site Images</h2>
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
      <Popup
        popupToggle={popupToggle}
        // popupToggle={true}
        setPopupToggle={(data) => setPopupToggle(data)}
        popupTitle={popupTitle}
      >
        {(() => {
          switch (popupComponent) {
            case "activities":
              return <Activities fromPopup={true} />;
            case "siteimages":
              return <SiteImages fromPopup={true} />;
            case "budget":
              return <BudgetSection fromPopup={true} />;
            case "updates":
              return <Updates />;
            default:
              break;
          }
        })()}
      </Popup>
    </div>
  );
}
