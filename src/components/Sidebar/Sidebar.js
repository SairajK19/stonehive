import React from "react";
import styles from "./sidebar.module.scss";
import logo from "../../assets/images/logo.png";
import hiveImg from "../../assets/svg/hive.svg";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Sidebar({ items }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>StoneHive</h1>
      </div>
      <div className={styles.items}>
        {items.map((item, index) => {
          return (
            <NavLink
              to={item.link}
              key={index}
            >
              <div className={styles.items_each}>
                <Icon icon={item.icon} width="30px" />
                <p>{item.name}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className={styles.hive_svg}>
        <img src={hiveImg} alt="" />
      </div>
      <div className={styles.item_setting}>
        <NavLink
          to="/settings"
          className={(isActive) => (isActive ? "active_item" : null)}
        >
          <div className={styles.items_each}>
            <Icon icon="eva:settings-fill" width="30px" />
            <p>settings</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
