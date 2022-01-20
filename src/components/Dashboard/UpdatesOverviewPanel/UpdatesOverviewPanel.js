import React, { useRef, useState, useLayoutEffect } from "react";
import { Icon } from "@iconify/react";
import styles from "./updates_overview_panel.module.scss";
export default function UpdatesOverviewPanel() {
  const updateListRef = useRef();
  useLayoutEffect(() => {
    console.log(updateListRef.current.clientHeight);
    console.log(updateListRef.current.scrollHeight);
  }, [updateListRef]);
  return (
    <div className={`${styles.updates} dash_panel`}>
      <h2 id="panel_title">Updates</h2>
      <div className={styles.update_filter}>
        <UpdatesFilter />
      </div>
      <div className={styles.update_list} ref={updateListRef}>
        {[1, 2, 3, 4, 5, 6].map(() => {
          return (
            <div className={styles.update_list_item}>
              <div
                className={styles.update_svg}
                style={{ backgroundColor: "rgba(255, 136, 54,0.2)" }}
              >
                <Icon
                  icon="clarity:design-line"
                  style={{ color: "rgba(255, 136, 54,1)" }}
                />
              </div>
              <div className={styles.update_list_item_info}>
                <p id={styles.update_list_info_head}>Design Completed</p>
                <p id={styles.update_list_info_date}>20 jun 2021</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.update_view_all}>
        <button
        //   onClick={() => {
        //     setPopupTitle("Updates");
        //     setPopupComponent("updates");
        //     setPopupToggle(true);
        //   }}
        >
          View All
        </button>
      </div>
    </div>
  );
}

export function UpdatesFilter() {
  const [dropdowntoggle, setDropdowntoggle] = useState(false);
  const filterList = ["This Month", "This Week", "This Year", "All Time"];
  const [currentFilter, setCurrentFilter] = useState(filterList[0]);
  function handleFilter(e) {
    setDropdowntoggle(!dropdowntoggle);
    e.stopPropagation();
  }
  return (
    <span className={styles.filter} onClick={handleFilter}>
      <button className={styles.current_filter}>
        <p>{currentFilter}</p>
        <Icon icon="akar-icons:arrow-up-down" height="10" />
      </button>

      <div
        className={styles.filter_drop_down}
        style={dropdowntoggle ? { display: "block" } : { display: "none" }}
      >
        <ul>
          {filterList.map((filter) => {
            return (
              <li onClick={() => {setCurrentFilter(filter)}}>
                <p
                  style={
                    currentFilter === filter
                      ? { color: "rgba(255, 136, 54,1)" }
                      : null
                  }
                >
                  {filter}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </span>
  );
}
