import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Icon } from "@iconify/react";

import styles from "./budgetchart.module.scss";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  datasets: [
    {
      data: [12, 19, 3],

      backgroundColor: [
        "rgba(93, 177, 152, 1)",
        "rgba(250, 114, 84, 1)",
        "rgba(255, 193, 34, 1)",
      ],
      borderRadius: "100px",
      borderWidth: 5,
      height: 0,
      width: 0,
    },
  ],
};
export default function BudgetChart() {
  return (
    <div className={styles.container}>
      
      <Doughnut
        className="chart"
        data={data}
        style={{ height: "50%", maxWidth: "50%", maxHeight: "100%" }}
      />
      <div className={styles.budget_summary}>
        <div className={styles.summary_item}>
          <Icon icon="carbon:dot-mark" height="30" color="#7DC2AD" />
          <div className={styles.details}>
            <p id={styles.amount}>₹2700k</p>
            <p id={styles.description}>Total Budget</p>
          </div>
        </div>
        <div className={styles.summary_item}>
          <Icon icon="carbon:dot-mark" height="30" color="#FECB49" />
          <div className={styles.details}>
            <p id={styles.amount}>₹2700k</p>
            <p id={styles.description}>Budget Remaining</p>
          </div>
        </div>
        <div className={styles.summary_item}>
          <Icon icon="carbon:dot-mark" height="30" color="#FA7254" />
          <div className={styles.details}>
            <p id={styles.amount}>₹2700k</p>
            <p id={styles.description}>Budget Spent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
