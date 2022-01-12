import React, { useEffect, useState } from "react";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems, setTopBarVisibility } from "../../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
//components
import Imageviewer from "../../../../components/ImageViewer/Imageviewer";

//styles
import styles from "./plan_elevation.module.scss";
import "../../../../styles/dashboard.scss";
export default function PlanElevation({ fromPopup = false }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fromPopup) {
      dispatch(
        setSidebarItems({ active: "plan-elevation", items: clientSidebarItems })
      );
    }
    dispatch(setTopBarVisibility({ visibility: true }));
  });
  return (
    <div
      className={
        !fromPopup
          ? `${styles.container} responsive_font main_page p-20`
          : `${styles.container} responsive_font main_page`
      }
    >
      {" "}
      <Imageviewer />
    </div>
  );
}
