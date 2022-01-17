import React, { useContext, useEffect } from "react";
import BudgetChart from "../Dashboard/Budget/BudgetChart/BudgetChart";

import { Icon } from "@iconify/react";

import PhaseSelector, {
  SelectedPhaseContext,
} from "../PhaseSelector/PhaseSelector";

import styles from "./budget.module.scss";
import BarChart from "../Charts/BarChart/BarChart";

export default function Budget() {
  const SelectedPhase = useContext(SelectedPhaseContext);
  useEffect(() => {
    console.log(SelectedPhase);
  }, [SelectedPhase]);
  return (
    <div className={styles.container}>
      <div className={styles.budget_charts}>
        {SelectedPhase}
        <BudgetChart />
      </div>
      <div className={styles.phases}>
        <PhaseSelector />
      </div>
      <div className={styles.budget_graph}>
        <div className={styles.charts_head}>
          <p id={styles.title}>Actual vs Estimated Phase Budget</p>
          <p id={styles.budget_difference}>
            <Icon icon="bx:bxs-up-arrow" color="#82D616" height="20" />
            4% more than planned budget
          </p>
        </div>
        <div className={styles.chart}>
          <BarChart />
        </div>
      </div>
    </div>
  );
}
