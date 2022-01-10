import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contractorSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";

//component
import ImageViewer from "../../../../components/ImageViewer/Imageviewer";
//styles
import styles from "./plan_elevation.module.scss";
import "../../../../styles/dashboard.scss";
export default function PlanElevation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({
        active: "Plan Elevation",
        items: contractorSidebarItems,
      })
    );
  });
  return (
    <div className={`${styles.container} responsive_font`}>
      <ImageViewer />
    </div>
  );
}
