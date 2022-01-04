import React, { useState } from "react";
import styles from "./updates.module.scss";
import { Icon } from "@iconify/react";
export default function Updates() {
  const colors = ["#7DC2AD61", "#FF88364F", "#FECB4959"];
  return (
    <div className={styles.container}>
      <p className="popup_title">Updates</p>
      <button className={styles.filter}>
        <Icon icon="icon-park:loading-one" height="15" color="#296DF1" />
        <p>This Month</p>
        <Icon icon="akar-icons:arrow-up-down" height="10" />
      </button>
      <div className={styles.updates_section_grid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
          return (
            <UpdateCard
              color={colors[Math.floor(Math.random() * colors.length)]}
            />
          );
        })}
      </div>
    </div>
  );
}
function UpdateCard({ color }) {
  const [cardToggle, setCardToggle] = useState(false);
  return (
    <div
      className={styles.updates_card}
      style={
        !cardToggle ? { height: "fit-content", minHeight: "fit-content" } : null
      }
    >
      <div className={styles.card_title}>
        <Icon icon="akar-icons:circle" height="20" />
        <p>Design Completed </p>
        <button onClick={() => setCardToggle(!cardToggle)}>
          <Icon
            icon={cardToggle ? "clarity:window-close-line" : "ep:arrow-down"}
            height="20"
          />
        </button>
      </div>

      <div style={cardToggle ? { display: "block" } : { display: "none" }}>
        <div className={styles.update_card_desc}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero et
            vehicula elementum pulvinar. Et . volutpat. Lacus, ullamcorper
            posuere a risus morbi urna vitae massa.
          </p>
        </div>

        <svg
          className={styles.updates_design}
          viewBox="0 0 346 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 75H345.5V14.5637C345.5 9.47433 341.202 11.9827 333.633 16.3999C317.311 25.9248 285.781 44.3255 249.34 14.5637C221.495 -8.17795 195.211 8.22555 171.302 23.1463C149.412 36.8076 129.514 49.2259 112.232 29.2174C79.3118 -8.89792 52.4148 -0.459139 25.8659 7.87045C17.2716 10.5669 8.71384 13.2519 0 14.3424V75Z"
            fill={color}
            fill-opacity="0.31"
          />
        </svg>

        <svg
          className={styles.updates_design}
          viewBox="0 0 346 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C60.6201 66.9051 101.939 -36.2215 166.232 38.2175C230.526 112.656 292.996 -41.2185 346 31.0732V84H0V0Z"
            fill={color}
            fill-opacity="0.8"
          />
        </svg>
        <div className={styles.timestamp}>
          <p>9:46 PM 20 Jun 2021</p>
        </div>
      </div>
    </div>
  );
}
