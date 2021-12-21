import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import {
  superuserHomeSidebarItems,
  superuserHomeSidebarItemsMobile,
} from "../../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";
import styles from "./styles/inquiries.module.scss";

export default function Inquiries() {
  const dispatch = useDispatch();

  useEffect(() => {
    // hide top bar
    dispatch(setTopBarVisibility({ visibility: false }));

    dispatch(
      setSidebarItems({ active: "Inquiries", items: superuserHomeSidebarItems })
    );

    if (window.innerWidth <= 810) {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItemsMobile,
        })
      );
    }

    window.matchMedia("(max-width: 810px)").addEventListener("change", () => {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItemsMobile,
        })
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      {/* Inquiries list */}
      <div className={styles.inquiries_list}>
        <h1>All Inquiries</h1>
        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Inquiry */}
      <div></div>
    </div>
  );
}
