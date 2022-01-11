import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSidebarItems, setTopBarVisibility } from "../../../../redux/reducers/shReducers";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";

import styles from "./siteimages.module.scss";

import Imageviewer from "../../../../components/ImageViewer/Imageviewer";
export default function Siteimages({ fromPopup }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fromPopup) {
      dispatch(
        setSidebarItems({ active: "site images", items: clientSidebarItems })
      );
    }

    dispatch(setTopBarVisibility({ visibility: true }));
  });
  return <Imageviewer />;
}
