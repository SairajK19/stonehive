import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contractorSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";
import ActivityTaskTable from "../../../../components/ActivityTaskTable/ActivityTaskTable";
import FinancialCards from "../../../../components/FinanclalCards/FinancialCards";
import PhaseSelector from "../../../../components/PhaseSelector/PhaseSelector";

import styles from "./task.module.scss";
import "../../../../styles/dashboard.scss";
export default function Tasks({ fromPopup = false }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fromPopup) {
      dispatch(
        setSidebarItems({ active: "tasks", items: contractorSidebarItems })
      );
    }
  });
  return (
    <div
      className={
        !fromPopup
          ? `${styles.container} responsive_font p-20`
          : `${styles.container} responsive_font`
      }
    >
      <div className={styles.task_table}>
        <ActivityTaskTable contractorDash={true} />
      </div>
      <div className={styles.phases}>
        <PhaseSelector />
      </div>
      <div className={styles.financials}>
        <FinancialCards />
      </div>
    </div>
  );
}
