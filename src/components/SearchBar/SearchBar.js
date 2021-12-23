import { Icon } from "@iconify/react";
import React from "react";
import styles from "./SearchBar.module.scss";


export default function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <Icon icon="fe:search" style={{ fontSize: "20px" }} />
      <input type="text" placeholder="Search" />
    </div>
  );
}
