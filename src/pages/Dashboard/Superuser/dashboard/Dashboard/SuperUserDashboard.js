import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../../redux/reducers/shReducers";
import styles from "./styles/SuperUserDashboard.module.scss";

export default function SuperUserDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setSidebarItems({active: "Dashboard", items: superuserSidebarItems}))
  }, []);

  return <div>SU DASH</div>;
}
