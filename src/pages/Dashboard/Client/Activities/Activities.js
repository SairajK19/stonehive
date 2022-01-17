import React, { useEffect, useState } from "react";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import PhaseSelector from "../../../../components/PhaseSelector/PhaseSelector";
import ActivityTaskTable from "../../../../components/ActivityTaskTable/ActivityTaskTable";
import FinancialCards from "../../../../components/FinanclalCards/FinancialCards";
import styles from "./activities.module.scss";
import LineChart from "../../../../components/Charts/LineChart/LineChart";

export default function Activities({ fromPopup }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fromPopup) {
      dispatch(
        setSidebarItems({ active: "activities", items: clientSidebarItems })
      );
    }
    dispatch(setTopBarVisibility({ visibility: true }));
  });
  return (
    <div
      className={
        !fromPopup
          ? `${styles.container} responsive_font p-20`
          : `${styles.container} responsive_font`
      }
    >
      <div className={styles.activities_table}>
        <ActivityTaskTable />
      </div>
      <div className={styles.phases}>
        <PhaseSelector />
      </div>
      <div className={styles.charts_financials}>
        <div className={styles.line_chart}>
          <div className={styles.charts_head}>
            {" "}
            <p id={styles.title}>Actual vs Estimated Phase Budget</p>
            <p id={styles.budget_difference}>
              <Icon icon="bx:bxs-up-arrow" color="#82D616" height="20" />
              4% more than planned budget
            </p>
          </div>
          <div className={styles.chart}>
            <LineChart />
          </div>
        </div>
        <FinancialCards />
      </div>
    </div>
  );
}
