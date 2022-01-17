import React from "react";
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

export default function BarChart() {
  return (
    <Bar
      options={options}
      data={data}
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
  );
}
