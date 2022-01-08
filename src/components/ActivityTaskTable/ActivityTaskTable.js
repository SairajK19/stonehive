import React from "react";
import styles from "./activitytasktable.module.scss";

import { Icon } from "@iconify/react";

export default function ActivityTaskTable() {
  const colors = [
    "rgba(229, 60, 109, 1)",
    "rgba(254, 203, 73, 1)",
    "rgba(125, 194, 173, 1)",
    "rgba(255, 136, 54, 1)",
  ];

  const tableheads = ["Activity", "Budget", "Cost", "Status"];
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
            return (
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
