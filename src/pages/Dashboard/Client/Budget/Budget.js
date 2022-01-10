import React, { useEffect, useState } from "react";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";
import { useDispatch } from "react-redux";
import BudgetSection from "../../../../components/BudgetSection/Budget";

//Styles
import styles from "./budget.module.scss";
import "../../../../styles/dashboard.scss";

export default function Budget() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSidebarItems({ active: "budget", items: clientSidebarItems }));
  });
  return (
    <div className={`${styles.container} responsive_font`}>
      <BudgetSection />
    </div>
  );
}
