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
  const [showOverlay, setShowOverlay] = useState(false);

  const handleDropdownClick = (component) => {
    const icon = document.getElementById("icon");
    const checkbox = document.getElementsByName("dropdown_checkbox")[0];
    const notifiCheckbox = document.getElementsByName(
      "notifi_dropdown_checkbox"
    )[0];

    icon.style.transform === "rotate(0deg)"
      ? (icon.style.transform = "rotate(180deg)")
      : (icon.style.transform = "rotate(0deg)");

    notifiCheckbox.checked = false;
    setShowOverlay(true);
  };

  const handleNotifiDropdownCLick = (component) => {
    const checkbox = document.getElementsByName("notifi_dropdown_checkbox")[0];
    const profileCheckbox = document.getElementsByName("dropdown_checkbox")[0];

    profileCheckbox.checked = false;
    setShowOverlay(true);
  };

  const handleOverlayClick = (component) => {
    const profileCheckbox = document.getElementsByName("dropdown_checkbox")[0];
    const notifCheckbox = document.getElementsByName(
      "notifi_dropdown_checkbox"
    )[0];

    if (profileCheckbox.checked === true) {
      const icon = document.getElementById("icon");

      icon.style.transform === "rotate(0deg)"
        ? (icon.style.transform = "rotate(180deg)")
        : (icon.style.transform = "rotate(0deg)");

      profileCheckbox.checked = false;
    } else {
      notifCheckbox.checked = false;
    }

    setShowOverlay(false);
  };
  return (
    <div className={`${styles.container} responsive_font`}>
      {showOverlay ? (
        <span
          className={styles.container_overlay}
          onClick={handleOverlayClick}
        ></span>
      ) : (
        ""
      )}
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
        <div className={styles.dropdown_container}>
          <input
            type="checkbox"
            id={styles.dropdown_checkbox}
            name="notifi_dropdown_checkbox"
            onClick={handleNotifiDropdownCLick}
          />
          <div
            className={styles.dropdown_icon}
            onClick={handleNotifiDropdownCLick}
          >
            <Icon icon="ic:baseline-circle-notifications" width="30px" />
          </div>
          <NotificationDropDown />
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.profile}>
          <img src={ProfileImg} alt="profile" />
        </div>
        <div className={styles.dropdown_container}>
          <input
            type="checkbox"
            id={styles.dropdown_checkbox}
            name="dropdown_checkbox"
            onClick={handleDropdownClick}
          />
          <div className={styles.dropdown_icon} onClick={handleDropdownClick}>
            <Icon
              icon="ls:dropdown"
              width="20px"
              id="icon"
              className={styles.icon}
            />
          </div>
          <ProfileDropDown
            showOverlay={showOverlay}
            handleDropdownClick={handleDropdownClick}
          />
        </div>
      </div>
    </div>
  );
}

const ProfileDropDown = ({ showOverlay, handleDropdownClick }) => {
  return (
    <div className={styles.dropdown} id={styles.dropdown}>
      <div className={styles.name}>
        <p>Signed in as</p>
        <p>Sairaj Kapdi</p>
      </div>
      <div className={styles.navs}>
        <div className={styles.item}>
          <Icon icon="ci:settings-filled" />
          <Link to="/settings">Settings</Link>
        </div>
        <div className={styles.item}>
          <Icon icon="ri:logout-circle-r-fill" />
          <Link to="/client/settings">Logout</Link>
        </div>
      </div>
    </div>
  );
};

const NotificationDropDown = () => {
  return (
    <div
      className={styles.dropdown}
      style={{ width: "300px", maxHeight: "500px" }}
    >
      <div className={styles.heading}>
        <p>Notifications</p>
        <div className={styles.clear_button}>
          <p>Clear all</p>
          <Icon icon="ant-design:clear-outlined" />
        </div>
      </div>
      <div className={styles.notifi_list}>
        {[1, 2, 3].map((_, id) => (
          <Notification id={id} />
        ))}
      </div>
    </div>
  );
};

const Notification = ({ id }) => {
  return (
    <div className={styles.notification} id={id}>
      <div id={styles.notification_state}></div>
      <div className={styles.icon}>
        <Icon icon="clarity:design-line" />
      </div>
      <div className={styles.notification_text}>
        <p id={styles.text}>Design Completed</p>
        <p id={styles.date}>20 Jun 2021</p>
        <p id={styles.time}>2 mins ago</p>
      </div>
    </div>
  );
};
