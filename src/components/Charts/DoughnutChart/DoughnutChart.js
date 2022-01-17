import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
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
export default function DoughnutChart() {
  return (
    <Doughnut
      className="chart"
      data={data}
      style={{ height: "100%", maxWidth: "50%", maxHeight: "100%" }}
    />
  );
}
