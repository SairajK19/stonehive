import React from "react";
import { Icon } from "@iconify/react";

import DoughnutChart from "../../../Charts/DoughnutChart/DoughnutChart";

import styles from "./budgetchart.module.scss";

export default function BudgetChart() {
  return (
    <div className={styles.container}>
      <DoughnutChart />
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
