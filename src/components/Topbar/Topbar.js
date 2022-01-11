import React from "react";
import styles from "./topbar.module.scss";
import { Icon } from "@iconify/react";
import ProfileImg from "../../assets/images/profile.png";
import { useSelector } from "react-redux";
export default function Topbar() {
  const active_item = useSelector(
    (state) => state.stonehive.sidebarItems.active
  );

  return (
    <div className={`${styles.container} responsive_font`}>
      <div className={styles.headings}>
        <div className={styles.headings_col}>
          <h2>{active_item}</h2>
          <h5>
            Welcome back sairaj
            <Icon
              icon="emojione:waving-hand-medium-light-skin-tone"
              height="20"
            />
          </h5>
        </div>
      </div>
      <div className={styles.user_profile_notifi}>
        <Icon icon="ic:baseline-circle-notifications" width="30px" />
        <div className={styles.seperator}></div>
        <div className={styles.profile}>
          <img src={ProfileImg} alt="prifle" />
        </div>
        <Icon icon="ls:dropdown" width="20px"/>
      </div>
    </div>
  );
}
