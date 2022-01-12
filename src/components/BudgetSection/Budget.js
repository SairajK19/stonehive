import React, { useContext, useEffect } from "react";
import BudgetChart from "../Dashboard/Budget/BudgetChart/BudgetChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Icon } from "@iconify/react";

import PhaseSelector, {
  SelectedPhaseContext,
} from "../PhaseSelector/PhaseSelector";

import styles from "./budget.module.scss";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [""];
export const options = {
  indexAxis: "y",
  respondive: true,
  plugins: {
    legend: {
      position: "left",
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: "Actual",
      data: [10],
      backgroundColor: "rgba(251, 147, 109, 1)",
    },
    {
      label: "Estimated",
      data: [50],
      backgroundColor: "rgba(128, 201, 179, 1)",
    },
  ],
};

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
          {" "}
          <Bar
            options={options}
            data={data}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
