import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
      fill: true,
      borderColor: "rgba(255, 0, 77, 1)",
      backgroundColor: "rgba(255, 0, 77, .2)",
    },
    {
      label: "Estimated",
      data: [100, 150, 300],
      fill: true,
      borderColor: "rgba(254, 61, 0, 1)",
      backgroundColor: "rgba(254, 61, 0, .2)",
    },
  ],
};
export default function LineChart() {
    return <Line data={data} options={options} style={{ maxHeight: "100%", maxWidth: "100%" }}/>;
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
