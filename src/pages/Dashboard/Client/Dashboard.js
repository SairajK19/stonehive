import React, { useEffect } from "react";
import { clientSidebarItems } from "../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
export default function ClientDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSidebarItems(clientSidebarItems));
  });
  return (
    <div>
      <h1>Client</h1>
    </div>
  );
}
