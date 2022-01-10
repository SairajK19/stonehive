import React from "react";
import { Icon } from "@iconify/react";
import styles from "./updates_overview_panel.module.scss";
export default function UpdatesOverviewPanel() {
  return (
    <div className={`${styles.updates} dash_panel`}>
      <h2 id="panel_title">Updates</h2>
      <div className={styles.update_filter}>
        <p>September 2021</p>
        <Icon icon="akar-icons:arrow-up-down" height="15" />
      </div>
      <div className={styles.update_list}>
        {[1, 2, 3].map(() => {
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
