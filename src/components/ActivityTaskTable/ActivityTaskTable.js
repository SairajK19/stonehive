import React, { useState } from "react";
import styles from "./activity_task_table.module.scss";

import { Icon } from "@iconify/react";

export default function ActivityTaskTable({ contractorDash = false }) {
  const tableheads = ["Activity", "Budget", "Cost", "Status", ""];
  return (
    <div className={styles.container}>
      <table>
        <thead>
          {tableheads.map((data) => (
            <td>{data}</td>
          ))}
        </thead>
        <tbody>
          {[1, 2, 3].map(() => {
            return <TableItem contractorDash={contractorDash} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function TableItem({ contractorDash }) {
  const colors = [
    "rgba(229, 60, 109, 1)",
    "rgba(254, 203, 73, 1)",
    "rgba(125, 194, 173, 1)",
    "rgba(255, 136, 54, 1)",
  ];

  const [optionToggle, setOptionToggle] = useState(false);
  return (
    <>
      <tr>
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
            <p id={styles.name}>Design</p>
          </div>
        </td>
        <td>₹1,00,000</td>
        <td>₹50,000</td>
        <td>
          <p id={styles.status}>Completed</p>
        </td>
        <td
          style={
            contractorDash
              ? { visibility: "visible" }
              : { visibility: "hidden" }
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
      <tr style={optionToggle ? { display: "block" } : { display: "none" }}>
        {/* <td></td>
        <td></td>
        <td></td> */}
        <td className={styles.status_menus}>
          {" "}
          <p id={styles.status}>Completed</p>
          <p id={styles.status}>Completed</p>
          <p id={styles.status}>Completed</p>
        </td>
      </tr>
    </>
  );
}
