import React from "react";
import styles from "./Popup.module.scss";

export default function Popup({ Component, handlePopupToggle, popupName }) {
  return (
    <span className={styles.popup} id="popup">
      <span
        className={styles.overlay}
        onClick={() => handlePopupToggle(popupName)}
      ></span>

      <Component handlePopupToggle={handlePopupToggle} />
    </span>
  );
}
