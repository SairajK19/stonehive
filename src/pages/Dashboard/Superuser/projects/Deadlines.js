import React, { useState, useEffect } from "react";
import card_design from "../../../../assets/svg/card_design.svg";
import styles from "./styles/projects.module.scss";
import { Icon } from "@iconify/react";
import { superuserHomeSidebarItems, superuserHomeSidebarItemsMobile } from "../../../../components/Sidebar/sidebarItems";
import { useDispatch, useSelector } from "react-redux";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";

export default function Deadlines() {
  const [deadline, setDeadlineFilter] = useState("Approaching Deadlines");

  // Top Bar Visibility (We don't need top bar for this page).
  const dispatch = useDispatch();
  dispatch(setTopBarVisibility({ visibility: false }));

  // Sets sidebar navigations
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Projects", items: superuserHomeSidebarItemsMobile })
    );
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.deadlines}
        id="deadlines"
        style={{
          borderRadius: "0px",
          position: "static",
          width: "100%",
          margin: "0 auto",
          paddingBottom: "700px",
          display: "block"
        }}
      >
        {/* Active Project Count */}
        <div className={styles.active_project_count}>
          <h1>30</h1>
          <p>Total Active Projects</p>
          <span>
            <img src={card_design} />
          </span>
        </div>

        {/* Deadlines list */}
        <div className={styles.deadline_list}>
          {/* Filter button */}
          <div className={styles.deadline_filter_wrapper}>
            <label>
              <input type="checkbox" id="cb" />
              <div className={styles.deadline_filter_btn}>
                <p>{deadline}</p>
                <Icon icon="ls:dropdown" />
              </div>
              <span className={styles.deadline_filter_dd}>
                <button
                  onClick={() => {
                    document.getElementById("cb").checked = false;
                    setDeadlineFilter("Approaching Deadlines");
                  }}
                >
                  Approaching Deadlines
                </button>
                <button
                  onClick={() => {
                    document.getElementById("cb").checked = false;
                    setDeadlineFilter("Missed Deadlines");
                  }}
                >
                  Missed Deadlines
                </button>
              </span>
            </label>
          </div>

          {/* Deadline project list */}
          <div className={styles.deadline_projects}
            style={{
                width: "96%"
            }}  
            >
            {[
              1, 2, 321, 32, 1432, 4, 324, 3, 24, 32, 4, 32, 432, 432, 4, 324,
              32, 4,
            ].map(() => (
              <div className={styles.deadlined_project}>
                <h3>Project 1</h3>
                <p>Activity 1 approaching deadline</p>
                <p>20.06.2021</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
