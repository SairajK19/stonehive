import React from "react";
import styles from "./plan_elevation_panel.module.scss";

import PlanElevationImg from "../../../assets/images/plan_elevations.png";

export default function PlanElevationPanel() {
  return (
    <div className={`${styles.plan_elevation} dash_panel dash_panel_flex`}>
      <h2 id="panel_title">Plans and Elevation</h2>
      <div className={styles.plan_image}>
        <img src={PlanElevationImg} alt="plans and elevations" />
      </div>
    </div>
  );
}
