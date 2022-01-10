import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contractorSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";

import styles from "./complaint.module.scss";
import SuperUserComplaint from "../../Superuser/dashboard/Complaints/SuperUserComplaints";
export default function Complaint() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "complaint", items: contractorSidebarItems })
    );
  });
  return (
    <div className={`${styles.container}`}>
      <SuperUserComplaint />
    </div>
  );
}
