import React, { useEffect } from "react";
import styles from "./popuplarge.module.scss";
import { Icon } from "@iconify/react";
export default function PopupLarge({
  children,
  popupToggle,
  setPopupToggle,
  popupTitle,
}) {
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.code === 27) {
        setPopupToggle(false);
      }
    });
  });
  return (
    <div
      className={styles.container}
      style={popupToggle ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <div
        className={styles.overlay}
        onClick={() => setPopupToggle(false)}
      ></div>
      <div className={styles.main_container}>
        <div className={styles.popup_head}>
          {" "}
          <p className={styles.popup_title}>{popupTitle}</p>
          <button
            className={styles.close_btn}
            onClick={() => setPopupToggle(false)}
          >
            <Icon icon="clarity:window-close-line" height="30" />
          </button>
        </div>
        <div className={styles.popup_main}> {children}</div>
      </div>
    </div>
  );
}
