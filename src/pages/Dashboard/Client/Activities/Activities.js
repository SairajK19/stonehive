import React, { useEffect, useState } from "react";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems, setTopBarVisibility } from "../../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import SVGCard from "../../../../components/SVGcards/SVGCard";
import PhaseSelector from "../../../../components/PhaseSelector/PhaseSelector";
import ActivityTaskTable from "../../../../components/ActivityTaskTable/ActivityTaskTable";
import FinancialCards from "../../../../components/FinanclalCards/FinancialCards";
import styles from "./activities.module.scss";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Actual",
      data: [1, 2, 3],
      borderColor: "rgba(255, 0, 77, 1)",
      backgroundColor: "rgba(255, 0, 77, .2)",
    },
    {
      label: "Estimated",
      data: [100, 150, 300],
      borderColor: "rgba(254, 61, 0, 1)",
      backgroundColor: "rgba(254, 61, 0, .2)",
    },
  ],
};
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
          <p id={styles.title}>Actual vs Estimated Phase Budget</p>
          <p id={styles.budget_difference}>
            <Icon icon="bx:bxs-up-arrow" color="#82D616" height="20" />
            4% more than planned budget
          </p>
          <Line className={styles.chart} data={data} options={options} />
        </div>
        <FinancialCards />
      </div>
    </div>
  );
}

// function LineChart() {
//   const data = (canvas) => {
//     const ctx = canvas.getContext("2d");
//     var bord = "#4F4F4F";
//     //1. Using gradient background.
//     let gradient = ctx.createLinearGradient(0, 0, 0, 700);
//     gradient.addColorStop(0, "rgba(0, 199,79, 0.33)");
//     gradient.addColorStop(0.5, "rgba(147, 255, 0, 0.2)");
//     gradient.addColorStop(1, "rgba(147, 255, 0, 0)");
//     bord = "#00C74F";

//     return {
//       labels: labels,
//       datasets: [
//         {
//           id:1,
//           label: "test",
//           data: [1, 2, 3, 4, 5],
//           fill: true,
//           backgroundColor: gradient,
//           pointBackgroundColor: "white",
//           borderWidth: 2,
//           borderColor: bord,
//         },
//       ],
//     };
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: true,
//     animation: {
//       easing: "easeInOutQuad",
//       duration: 1024,
//     },
//     scales: {
//       xAxes: [
//         {
//           ticks: {
//             display: true,
//           },
//           gridLines: {
//             display: true,
//             color: "rgba(200, 200, 200, 0.09)",
//           },
//         },
//       ],
//       yAxes: [
//         {
//           ticks: {
//             display: true,
//             beginAtZero: true,
//             steps: 1,
//             stepValue: 1,
//             max: 14,
//           },
//           gridLines: {
//             display: true,
//             color: "rgba(20, 20, 20, 0.08)",
//           },
//         },
//       ],
//     },
//     layout: {
//       padding: 5,
//     },
//     elements: {
//       line: {
//         tension: 0.5,
//       },
//     },
//     legend: {
//       display: true,
//     },
//     point: {
//       backgroundColor: "white",
//     },
//     tooltips: {
//       mode: "index",
//       intersect: false,
//     },
//     hover: {
//       mode: "index",
//       intersect: false,
//     },
//   };
//   return (
//     <Line
//       className={styles.chart}
//       datasetIdKey="id"
//       data={data}
//       options={options}
//       redraw={true}
//     />
//   );
// }
