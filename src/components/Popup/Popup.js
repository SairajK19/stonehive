import React from "react";
import styles from "./Popup.module.scss";

export default function Popup({ Component, handlePopupToggle }) {
  return (
    <span className={styles.popup} id="popup">
      <Component handlePopupToggle={handlePopupToggle} />
    </span>
  );
}
