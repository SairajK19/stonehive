import React, { useEffect } from "react";
import { clientSidebarItems } from "../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
import styles from "./client.module.scss";
export default function ClientDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSidebarItems(clientSidebarItems));
  });
  return <div> dashboard</div>;
}
