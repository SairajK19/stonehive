import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contractorSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";

import BudgetSection from "../../../../components/BudgetSection/Budget";

import styles from "../../Client/Budget/budget.module.scss";
export default function Budget() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "budget", items: contractorSidebarItems })
    );
  });
  return (
    <div className={`${styles.container} responsive_font`}>
      <BudgetSection />
    </div>
  );
}
