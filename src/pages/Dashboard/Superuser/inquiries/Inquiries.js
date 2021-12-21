import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { superuserHomeSidebarItems, superuserHomeSidebarItemsMobile } from "../../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";

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

  return <div>Inquiries MF</div>;
}
