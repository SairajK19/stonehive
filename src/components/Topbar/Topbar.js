import React, { useState, useEffect } from "react";
import styles from "./topbar.module.scss";
import { Icon } from "@iconify/react";
import ProfileImg from "../../assets/images/profile.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Topbar() {
  const active_item = useSelector(
    (state) => state.stonehive.sidebarItems.active
  );
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const checkbox = document.getElementById("dropdown_icon");

    checkbox.addEventListener("change", () => {
        const icon = document.getElementById("icon");

        (icon.style.transform === "rotate(0deg)") ? 
            icon.style.transform = "rotate(180deg)" : icon.style.transform = "rotate(0deg)" 
    })
  }, [])

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
          <div className={styles.dropdown_container}>
              <div className={styles.dropdown_icon} >
                  <input type="checkbox" id="dropdown_icon" onClick={() => setShowDropdown(!showDropdown)} />
                  <Icon icon="ls:dropdown" width="20px" id="icon" className={styles.icon} />
              </div>
              {
                  showDropdown ? 
                      <div className={styles.dropdown}>
                          <div className={styles.name}>
                              <p>Signed in as</p>
                              <p>Sairaj Kapdi</p>
                          </div>
                          <div className={styles.navs}>
                              <div className={styles.item}>
                                  <Icon icon="ci:settings-filled" />
                                  <Link to="/client/settings" >Settings</Link>
                              </div>
                              <div className={styles.item}>
                                  <Icon icon="ri:logout-circle-r-fill" />
                                  <Link to="/client/settings" >Logout</Link>
                              </div>
                          </div>
                      </div> : ""
              }
          </div>
      </div>
    </div>
  );
}
