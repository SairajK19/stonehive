import React, { useState } from "react";
import styles from "./activity_task_table.module.scss";

import { Icon } from "@iconify/react";

export default function ActivityTaskTable({ contractorDash = false }) {
  const tableheads = ["Activity", "Budget", "Cost", "Status"];
  const tableData = [
    {
      activity: "Design",
      budget: "1,00,000",
      cost: "50,000",
      status: "completed",
    },
    {
      activity: "Design",
      budget: "1,00,000",
      cost: "50,000",
      status: "delayed",
    },
    {
      activity: "Design",
      budget: "1,00,000",
      cost: "50,000",
      status: "completed",
    },
    {
      activity: "Design",
      budget: "1,00,000",
      cost: "50,000",
      status: "completed",
    },
  ];

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <table>
        <thead>
          {tableheads.map((data) => (
            <td>{data}</td>
          ))}
          <td
            style={
              contractorDash ? { display: "table-cell" } : { display: "none" }
            }
          ></td>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return <TableItem contractorDash={contractorDash} data={data} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function TableItem({ contractorDash, data }) {
  const colors = [
    "rgba(229, 60, 109, 1)",
    "rgba(254, 203, 73, 1)",
    "rgba(125, 194, 173, 1)",
    "rgba(255, 136, 54, 1)",
  ];

  const [optionToggle, setOptionToggle] = useState(false);
  return (
    <>
      <tr
        style={
          data.status === "delayed"
            ? { backgroundColor: "rgba(250, 114, 84, 0.12)" }
            : null
        }
      >
        <td>
          <div className={styles.activity_name}>
            <div
              className={styles.icon}
              style={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
              }}
            >
              <Icon icon="clarity:design-line" color="#ffff" />
            </div>
            <p id={styles.name}>{data.activity}</p>
          </div>
        </td>
        <td>₹{data.budget}</td>
        <td>₹{data.cost}</td>
        <td>
          <ActivityStatus status={data.status} />
        </td>
        <td
          style={
            contractorDash
              ? { display: "table-cell", textAlign: "center" }
              : { display: "none" }
          }
        >
          <button onClick={() => setOptionToggle(!optionToggle)}>
            <Icon
              icon={!optionToggle ? "iwwa:option" : "clarity:window-close-line"}
              height="20"
            />
          </button>
        </td>
      </tr>
      <tr style={optionToggle ? { display: "table-row" } : { display: "none" }}>
        <td colSpan={4}>
          <div
            className={
              optionToggle
                ? `${styles.flip_in} ${styles.status_menus}`
                : `${styles.flip_out} ${styles.status_menus}`
            }
          >
            {["completed", "pending", "ongoing", "haulted", "delayed"].map(
              (status) => {
                return <ActivityStatus status={status} />;
              }
            )}
          </div>
        </td>
        <td></td>
      </tr>
    </>
  );
}
function ActivityStatus({ status }) {
  const statusColors = {
    completed: {
      color: "rgba(125, 194, 173, 1)",
      bgcolor: "rgba(125, 194, 173, .1)",
    },
    pending: {
      color: "rgba(87, 89, 116, 1)",
      bgcolor: "rgba(87, 89, 116, 0.1)",
    },
    ongoing: {
      color: "rgba(89, 97, 249, 1)",
      bgcolor: "rgba(89, 97, 249, 0.1)",
    },
    haulted: {
      color: "rgba(250, 114, 84, 1)",
      bgcolor: "rgba(250, 114, 84, 0.1)",
    },
    delayed: {
      color: "rgba(250, 115, 85, 1)",
      bgcolor: "rgba(250, 115, 85, 0.1)",
    },
  };
  return (
    <p
      className={styles.status}
      style={{
        color: statusColors[status].color,
        backgroundColor: statusColors[status].bgcolor,
      }}
    >
      {status}
    </p>
  );
}
