import React from "react";
import styles from "./sidebar.module.scss";
import logo from "../../assets/images/logo.png";
import hiveImg from "../../assets/svg/hive.svg";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const items = useSelector((state) => state.stonehive.sidebarItems.items);
  return (
    <div className={`${styles.container} responsive_font`}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>StoneHive</h1>
      </div>
      <div className={styles.items}>
        {items
          ? items.map((item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  <div className={styles.items_each}>
                    <Icon icon={item.icon} width="30px" />
                    <p>{item.name}</p>
                  </div>
                </NavLink>
              );
            })
          : "loading"}
      </div>
      <div className={styles.hive_svg}>
        <img src={hiveImg} alt="" />
      </div>
    </div>
  );
}
