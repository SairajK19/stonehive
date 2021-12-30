import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { Icon } from "@iconify/react";

import styles from "./settings.module.scss";

import SettingsBgImg from "../../../../assets/images/settings_bg.png";
import ProfileImg from "../../../../assets/images/profile.png";
export default function Settings() {
  const [activeSidebar, setActiveSidebar] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "settings", items: clientSidebarItems })
    );
  });
  return (
    <div className={`${styles.container} ${styles.responsive_font}`}>
      <div className={styles.bg_image}>
        <img src={SettingsBgImg} alt="" />
      </div>
      <div className={styles.main_container}>
        <div className={styles.settings_sidebar}>
          <button
            onClick={(e) => setActiveSidebar(0)}
            className={!activeSidebar ? styles.active : null}
          >
            <Icon icon="carbon:user-settings" height="20" />
            Personal Info
          </button>
          <button
            onClick={() => setActiveSidebar(1)}
            className={activeSidebar ? styles.active : null}
          >
            <Icon icon="carbon:password" height="20" /> Password
          </button>
        </div>
        <div className={styles.settings_main}>
          {activeSidebar === 0 ? <ProfileSection /> : <PassSection />}
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <>
      <div className={styles.profile_head}>
        <div className={styles.profile_pic}>
          <img src={ProfileImg} alt="" />
          <button>
            <Icon icon="ci:edit" height="15" />
            Edit
          </button>
        </div>
        <div className={styles.profile_info}>
          <p id={styles.username}>Sairaj Kapadi</p>
          <p id={styles.settings_info}>
            Edit you personal information, password and more
          </p>
        </div>
      </div>
      <div className={styles.update_section}>
        <h2 className={styles.head_sideline}>Personal Info</h2>
        <form action="">
          <div className={styles.form_row}>
            <div className={styles.form_input}>
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className={styles.form_input} id={styles.lname}>
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.form_input}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={styles.form_input}>
            <label>Phone No.</label>
            <input type="tel" />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  );
}

function PassSection() {
  return (
    <div className="pass_section">
      <h2 className={styles.head_sideline}>Change Password</h2>
      <form action="">
        <div className={styles.form_row}>
          <div className={styles.form_input}>
            <label>Current Password</label>
            <input type="password" />
          </div>
          <div className={styles.form_input} id={styles.lname}>
            <label>New Password</label>
            <input type="password" />
          </div>
        </div>

        <div className={styles.form_input}>
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}
