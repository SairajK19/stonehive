import React from "react";
import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "Phase 1",
    "phase 1",
    new Date(2022, 1, 1),
    new Date(2022, 2, 20),
    null,
    100,
    null,
  ],  [
    "Phase 2",
    "phase 2",
    new Date(2022, 2, 1),
    new Date(2022, 3, 20),
    null,
    10,
    null,
  ],  [
    "Phase 3",
    "phase 3",
    new Date(2022, 3 , 1),
    new Date(2022, 5, 20),
    null,
    100,
    null,
  ],[
    "Phase 4",
    "phase 4",
    new Date(2022, 5 , 1),
    new Date(2022, 6, 20),
    null,
    100,
    null,
  ],[
    "Phase 5",
    "phase 5",
    new Date(2022, 6 , 1),
    new Date(2022, 7, 20),
    null,
    100,
    null,
  ],[
    "Phase 6",
    "phase 6",
    new Date(2022, 7 , 1),
    new Date(2022, 8, 20),
    null,
    100,
    null,
  ],[
    "Phase 7",
    "phase 7",
    new Date(2022, 8 , 1),
    new Date(2022, 10, 20),
    null,
    100,
    null,
  ],[
    "Phase 8",
    "phase 8 ",
    new Date(2022, 2 , 1),
    new Date(2022, 5, 20),
    null,
    20,
    null,
  ],
];

export const data = [columns, ...rows];

export const options = {
  height: 400,
  gantt: {
    trackHeight: 30,
  },
};

export default function GanttChart() {
  return (
    <Chart
      chartType="Gantt"
      style={{ overflowY: "auto", overflowX: "hidden" }}
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
