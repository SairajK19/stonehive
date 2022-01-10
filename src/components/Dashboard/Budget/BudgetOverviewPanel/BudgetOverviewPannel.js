import React from "react";

import BudgetChart from "../BudgetChart/BudgetChart";

import styles from "./budget_overview_panel.module.scss";

export default function BudgetOverviewPannel() {
  return (
    <div className={`${styles.budget_overview} dash_panel dash_panel_flex`}>
      <h2 id="panel_title">Total Budget Overview</h2>
      <div className={styles.budget_chart}>
        <BudgetChart />
      </div>
    </div>
  );
}
